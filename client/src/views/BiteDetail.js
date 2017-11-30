import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import Container from "../components/Container";
import CloseBtn from "../components/CloseBtn";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import { OutlineModal } from "../components/boron/Boron";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
// import TimePicker from "material-ui/TimePicker";

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
  -webkit-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
`;

export class BiteDetail extends Component {
  state = {
    selectedDate: ""
  };
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  handleChangeSelectedDate = (event, date) => {
    this.setState({ selectedDate: date });
  };

  disableOutOfRange = date => {
    return Date.parse(date) < Date.now();
  };

  render() {
    return (
      <div>
        <OutlineModal ref="modal" contentStyle={contentStyle}>
          <CloseBtn onClick={this.hideModal} />
          <Container column>
            <h4>
              Want to grab a Bite with {this.props.localId} at{" "}
              {this.props.restaurant} on Nov 30 at 3pm?
            </h4>
            <Button primary onClick={this.hideModal}>
              Sure!
            </Button>

            <Button onClick={this.hideModal}>No, thanks</Button>
          </Container>
        </OutlineModal>

        <Parallax bgImage="http://via.placeholder.com/1000x200" strength={300}>
          <ParallaxContent>
            <h1
              style={{
                position: "absolute",
                color: "white",
                left: "1em",
                bottom: "0.5em"
              }}
            >
              {this.props.restaurant}
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
                Grab a Bite with {this.props.localId}
                <Divider />
                <i
                  className="fa fa-calendar-o"
                  aria-hidden="true"
                  style={{ marginRight: "0.5em" }}
                />
                <MuiThemeProvider>
                  <DatePicker
                    style={{ display: "inline-block", height: "1em" }}
                    name="selectedDate"
                    onChange={this.handleChangeSelectedDate}
                    autoOk={false}
                    floatingLabelText="Select a Date"
                    shouldDisableDate={this.disableOutOfRange}
                    disableYearSelection={false}
                  />
                </MuiThemeProvider>
                
              </Col>
              <Col xs={12} md={4}>
                <Button primary onClick={this.showModal}>
                  Request to Book
                </Button>
                {/* <h1>Ippudo Ramen</h1> */}
              </Col>
              <Col xs={12} md={4}>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "0.5em" }}
                />
                {this.props.city}
                <Divider />
                <h4>(MAP HERE)</h4>
                <img
                  alt="placeholder"
                  src="http://via.placeholder.com/300x200"
                />
              </Col>
            </Row>
          </DetailContainer>
        </Grid>
      </div>
    );
  }
}
