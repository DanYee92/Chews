import React from "react";
import socket from "../components/Socket.js"
import API from "../util/API";
import moment from "moment";
import { FormTextArea } from "../components/Form"
import TextField from "material-ui/TextField"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../components/CustomMUI";

export class Message extends React.Component{
    state = {
        messageInput: "",
        messages: [],
        myInfo: null,
        theirInfo: null,
        windowHeight: null,
        smallChat: null
    }

    componentWillMount() {
        // if(!this.props.userId) {
        //     this.props.history.push("/")
        // }
    }

    componentDidMount() {
        this.updateWindowHeight();
        window.addEventListener("resize", this.updateWindowHeight);

        socket.on("message", message => {
            const previousMessages = this.state.messages
            this.setState({
                messages: previousMessages.concat(message),
                messageInput: ""
            })
        })

        const myId = this.props.userId
        const theirId = this.props.match.params.userId
        API.getUserInfo(myId)
            .then(res => this.setState({myInfo: res.data[0]}))
            .then(() => API.getUserInfo(theirId))
            .then(res => this.setState({theirInfo: res.data[0]}))
            .then(() => API.getMessages(myId, theirId))
            .then(res => this.setState({messages: res.data}))
            .then(() => console.log("state:", this.state))
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    sendMessage = event => {
        event.preventDefault()
        if(this.state.messageInput.trim() !== "") {
            const message = {
                senderId: this.state.myInfo._id,
                recipientId: this.state.theirInfo._id,
                timestamp: Date.now(),
                body: this.state.messageInput
            }
            console.log(message)
            API.sendMessage(message).then(() => {
                socket.emit("message", message)
            })
        }
    }

    updateWindowHeight = () => {
        this.setState({ smallChat: window.innerHeight < 700 ? true : false });
        this.setState({ windowHeight: window.innerHeight });
    };

    render() {
        return <div>
            <h1 style={{marginLeft: "0.5em", marginTop: "0.1em"}}>{this.state.theirInfo ? `Chat with ${this.state.theirInfo.firstName} ${this.state.theirInfo.lastName}` : "My Messages"}</h1>
            <div id="chatBox" style={this.state.smallChat ? {maxHeight: "58vh", overflowY: "scroll"} : {maxHeight: "68vh", overflowY: "scroll"}}>
                {this.state.messages ? this.state.messages.map(
                    (message, i) => (
                        this.props.match.params.userId ===
                            message.senderId
                            ? <div key={i} style={{clear: "both", float: "left", width: "60vw", marginLeft: "2em", marginBottom: "0.5em"}}>
                                <div style={{fontWeight: "bold", float: "left"}}>{this.state.theirInfo.firstName} {this.state.theirInfo.lastName}{" "}
                                ({moment(message.timestamp).format("YYYY/MM/DD kk:mm")}):</div>
                                <div style={{clear: "both", float: "left"}}>{message.body}</div>
                            </div>
                            : <div key={i} style={{clear: "both", float: "right", width: "60vw", marginRight: "2em", marginBottom: "0.5em"}}>
                                <div style={{fontWeight: "bold", float: "right"}}>{this.state.myInfo.firstName} {this.state.myInfo.lastName}{" "}
                                ({moment(message.timestamp).format("YYYY/MM/DD kk:mm")}):</div>
                                <div style={{clear: "both", float: "right"}}>{message.body}</div>
                            </div>
                    )
                ) : ""}
            </div>
            <form onSubmit={this.sendMessage}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <TextField
                    style={{position: "fixed", bottom: "0", margin: "2em", width:"90vw"}}
                    hintText="Message Field"
                    floatingLabelText="Enter a Message"
                    multiLine={false}
                    rows={1}
                    name="messageInput"
                    value={this.state.messageInput}
                    onChange={this.handleInputChange}
                />
            </MuiThemeProvider>
            {/* <FormTextArea style={{position: "fixed", bottom: "0", margin: "2em", padding: "1em", width:"90vw"}} placeholder="Enter a Message" type="text" name="messageInput" value={this.state.messageInput} onChange={this.handleInputChange} /> */}
            </form>
          </div>;
    }
}