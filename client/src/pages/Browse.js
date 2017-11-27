import React, { Component } from "react";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import { Grid, Row, Col } from "react-bootstrap";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

const Browse = () => {
  return (
    <div>
      <NavBar />
      <Grid>
        <Row>
          {/* dynamically generate here */}

          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>

          {/* to here */}

          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Browse;
