import React from "react";
import socket from "../components/Socket.js"

export class Message extends React.Component{
    state = {
        testVal: false,
        messageInput: "",
        messages: []
    }

    componentDidMount() {
        console.log("message mounted")
        this.setState({testVal: true})

        socket.on("message", message => {
            console.log("message:", message)
            const previousMessages = this.state.messages
            this.setState({
                messages: previousMessages.concat(message),
                messageInput: ""                
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    sendMessage = event => {
        event.preventDefault()
        socket.emit("message", this.state.messageInput)
    }

    render() {
        return <div>Hello, world.
            <div>
                {this.state.messages ? this.state.messages.map((message, i) => {
                    return <div key={i}>{message}</div>
                }) : ""}
            </div>
            <form onSubmit={this.sendMessage}>
                Enter Message:
                <input type="text" name="messageInput" value={this.state.messageInput} onChange={this.handleInputChange}/>
            </form>
        </div>
    }
}