import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "../components/Button"
import styled from "styled-components";

const DetailContainer = styled.div`
	overflow: hidden;
	margin: 2em;
`

const FullWidthImg = styled.img`
	width: 100%;
`
const Divider = styled.hr``;
const Spacer = styled.br``;

const BiteDetail = () => {
    return <div>
        <FullWidthImg src="http://via.placeholder.com/1000x300" />
        <Grid>
          <DetailContainer>
            <Row>
              <Col xs={12} md={4}>
                <Spacer />
                <Button primary>Request to Book</Button>
                <Spacer />
                <Spacer />
                Grab a Bite with Nicole Ersing
                <Divider />
                <i className="fa fa-calendar-o" aria-hidden="true" style={{ marginRight: "0.5em" }} />
                Nov 9 - Nov 30
                <Divider />
                <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
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
      </div>;
}

export default BiteDetail;