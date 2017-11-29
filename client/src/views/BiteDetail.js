import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import Container from "../components/Container";
import CloseBtn from "../components/CloseBtn";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import { OutlineModal } from "../components/boron/Boron";

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
  showModal = () => {
    this.refs.modal.show();
  };

  hideModal = () => {
    this.refs.modal.hide();
  };

  render() {
    return (
      <div>
        <OutlineModal ref="modal" contentStyle={contentStyle}>
          <CloseBtn onClick={this.hideModal} />
          <Container column>
            <h4>
              Want to grab a Bite with Nicole Ersing at Ippudo Ramen on Nov 30
              at 3pm?
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
              Ippudo Ramen
            </h1>
          </ParallaxContent>
        </Parallax>

        <Grid>
          <DetailContainer>
            <Row>
              <Col xs={12} md={4}>
                <Spacer />
                <Button primary onClick={this.showModal}>
                  Request to Book
                </Button>
                <Spacer />
                <Spacer />
                Grab a Bite with Nicole Ersing
                <Divider />
                <i
                  className="fa fa-calendar-o"
                  aria-hidden="true"
                  style={{ marginRight: "0.5em" }}
                />
                Nov 9 - Nov 30
                <Divider />
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "0.5em" }}
                />
                Streeterville
              </Col>
              <Col xs={12} md={4}>
                {/* <h1>Ippudo Ramen</h1> */}
              </Col>
              <Col xs={12} md={4}>
                <h4>(MAP HERE)</h4>
                <img src="http://via.placeholder.com/300x200" />
              </Col>
            </Row>
          </DetailContainer>
        </Grid>
      </div>
    );
  }
}
