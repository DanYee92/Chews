import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

export class SearchResults extends React.Component {
  state = {
    searchResults: []
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {/* dynamically generate here */}
          {this.props.searchResults
            ? this.props.searchResults.map((bite, i) => {
                return (
                  <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      title={bite.restaurant}
                      local={`${bite.localId.firstName} ${bite.localId.lastName}`}
                      startDate={bite.startDateRange}
                      endDate={bite.endDateRange}
                      location={bite.city}
                      biteId={bite._id}
                    />
                  </Col>
                );
              })
            : "No results"}

          {/* to here */}

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Ippudo Ramen"
              local="Imran Kazmi"
              startDate="Nov 29"
              endDate="Dec 30"
              location="West Loop"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
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
    );
  }
}
