import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import { OutlineModal } from "../components/boron/Boron";

const DetailContainer = styled.div`
  overflow: hidden;
  margin: 2em;
`;

//https://www.npmjs.com/package/react-parallax
const FullWidthImg = styled.img`
  width: 100%;
`;

const Divider = styled.hr``;
const Spacer = styled.br``;

export class BiteDetail extends Component {
  // showModal() {
  //  this.refs.modal.show();
  // }

  // hideModal() {
  //  this.refs.modal.hide();
  // }

  // callback(event){
  //       console.log(event);
  // }

  render() {
    return (
      <div>
        <Parallax bgImage="http://via.placeholder.com/1000x200" strength={300}>
          <div style={{ height: 300 }} />
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
                <h1>Ippudo Ramen</h1>
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

{
  /* <OutlineModal ref="modal" keyboard={this.callback}>
  <h2>I am a dialog</h2>
  <button onClick={this.hideModal}>Close</button>
</OutlineModal>; */
}
