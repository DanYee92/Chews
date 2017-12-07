import React, { Component } from "react";
import API from "../util/API.js";
import { Grid, Row, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import CloseBtn from "../components/CloseBtn";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import { OutlineModal } from "../components/boron/Boron";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
import muiTheme from "../components/CustomMUI"
// import TimePicker from "material-ui/TimePicker";
import moment from "moment";

const DetailContainer = styled.div`
  overflow: hidden;
  margin: 2em;
`;

const Divider = styled.hr``;
const Spacer = styled.br``;

const contentStyle = {
  backgroundColor: "white",
  height: "100%",
  padding: "1em",
  textAlign: "center"
};

const ParallaxContent = styled.div`
  height: 21em;
  @media (max-width: 768px) {
    height: 15em;
  };
  -webkit-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
`;

const BiteDetailButton = styled(Button)`
  margin: 1.5em 25%;
`

export class BiteDetail extends Component {
  state = {
    biteId: "",
    localId: "",
    firstName: "",
    lastName: "",
    city: "",
    restaurant: "",
    startDateRange: "",
    endDateRange: "",
    selectedDate: "",
    selectedDateString: "",
    selectedTime: "3 pm"
  };

  componentWillMount() {
    document.title = "Bite Details | Chews";
    
    API.getBiteDetail(this.props.match.params.biteId).then(res =>{
      const bite = res.data[0]
      console.log("bite from BiteDetail:", bite)
      this.setState({
        biteId: bite._id,
        firstName: bite.localId.firstName,
        lastName: bite.localId.lastName,
        restaurant: bite.restaurant,
        city: bite.city,
        localId: bite.localId,
        startDateRange: bite.startDateRange,
        endDateRange: bite.endDateRange
      });
    });
  }

  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  handleConfirmBite = event => {
    console.log("start handleConfirmBite()")
    event.preventDefault()

    const travelerId = this.props.userId;

    if(travelerId === this.state.localId._id) {
      alert("You can't grab a bite with yourself!")
    } else {
      const biteId = this.state.biteId
      const biteDate = this.state.selectedDate

      console.log("travelerId:", travelerId);
      console.log("biteId:", biteId)
      console.log("biteDate:", biteDate)

      API.bookBite(travelerId, biteId, biteDate)
        .then(res => console.log("res from API.bookBite() in handleConfirmBite()", res))
        .then(() => console.log("end handleConfirmBite()"))
        .then(() => this.hideModal())
        .then(() => this.props.history.push("/my-bites"))
        .catch(err => console.error(err))
    }
  }

  handleChangeSelectedDate = (event, date) => {
    this.setState({ selectedDate: date, selectedDateString: date.toString() })
  };

  disableOutOfRange = date => {
    return Date.parse(date) < Date.parse(this.state.startDateRange) || Date.parse(date) > Date.parse(this.state.endDateRange);
  };

  render() {
    return <div>
        <OutlineModal ref="modal" contentStyle={contentStyle}>
          <CloseBtn onClick={this.hideModal} />
          <Container column>
            <h4>
              Want to grab a Bite with {this.state.firstName} {this.state.lastName} at {this.state.restaurant} on {this.state.selectedDateString}?
            </h4>

            <Button style={{ margin: "0 auto" }} primary onClick={this.handleConfirmBite}>
              Sure!
            </Button>

            <Button style={{ margin: "0 auto" }} onClick={this.hideModal}>
              No, thanks
            </Button>
          </Container>
        </OutlineModal>

        <Parallax bgImage="http://via.placeholder.com/1000x200" strength={400}>
          <ParallaxContent>
            <h1
              style={{
                position: "absolute",
                color: "white",
                left: "1em",
                bottom: "0.5em"
              }}
            >
              {this.state.restaurant}
            </h1>
          </ParallaxContent>
        </Parallax>

        <Grid>
          <DetailContainer>
            <Row>
              <Col xs={12} md={4}>
                <Spacer />
                <Spacer />
                <Spacer />
                <i className="fa fa-user" aria-hidden="true" style={{ marginRight: "1em" }} />
                {`Grab a Bite with ${this.state.firstName} ${this.state.lastName}`}
                <Divider />
                <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "1em" }} />
                {this.state.city}
                <Divider />
                <div>
                  <i className="fa fa-calendar-o" aria-hidden="true" style={{ marginRight: "0.6em" }} />
                  {this.state.startDateRange === this.state.endDateRange ? moment(this.state.startDateRange).format("MMM D, YYYY") : `${moment(this.state.startDateRange).format("MMM D, YYYY")} - ${moment(this.state.endDateRange).format("MMM D, YYYY")}`}
                </div>
                <MuiThemeProvider muiTheme={muiTheme}>
                  <DatePicker name="selectedDate" onChange={this.handleChangeSelectedDate} autoOk={false} floatingLabelText="Select a Date" shouldDisableDate={this.disableOutOfRange} disableYearSelection={false} />
                </MuiThemeProvider>

                {this.props.userId ? <BiteDetailButton large primary onClick={this.showModal}>
                    Request to Book
                  </BiteDetailButton> : <BiteDetailButton large primary onClick={this.props.auth.bookBiteLoginSignup}>
                    Log in to Book
                  </BiteDetailButton>}
              </Col>
              <Col xs={12} md={8}>
                <img alt="placeholder" src="http://via.placeholder.com/600x400" />
                <h4>(MAP HERE)</h4>
              </Col>
            </Row>
          </DetailContainer>
        </Grid>
      </div>;
  }
}
