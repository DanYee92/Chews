import React from "react";
import API from "../util/API";
import { Grid, Row, Col } from "react-bootstrap";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

export class SearchResults extends React.Component {
  state = { searchResults: [], searchQuery: this.props.match.params.searchQuery};

  componentDidMount() {
    API.searchForBites(this.state.searchQuery).then(res =>
      this.setState({ searchResults: res.data })
    );
  }

  render() {
    return <Grid>
        <Row className="show-grid">
          {/* dynamically generate here */}
          {this.props.searchResults ? this.props.searchResults.map(
              (bite, i) => {
                console.log("USING PROPS")
                return (
                  <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      title={bite.restaurant}
                      local={`${bite.localId.firstName} ${
                        bite.localId.lastName
                      }`}
                      startDate={bite.startDateRange}
                      endDate={bite.endDateRange}
                      location={bite.city}
                      biteId={bite._id}
                    />
                  </Col>
                );
              }
          ) : this.state.searchResults.map(
              (bite, i) => {
                console.log("USING STATE");
                return (
                  <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      title={bite.restaurant}
                      local={`${bite.localId.firstName} ${
                        bite.localId.lastName
                      }`}
                      startDate={bite.startDateRange}
                      endDate={bite.endDateRange}
                      location={bite.city}
                      biteId={bite._id}
                    />
                </Col>)}
          )}

          {/* to here */}

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card title="Ippudo Ramen" local="Imran Kazmi" startDate="Nov 29" endDate="Dec 30" location="West Loop" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card title="Ippudo Ramen" local="Imran Kazmi" startDate="Nov 29" endDate="Dec 30" location="West Loop" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card title="Ippudo Ramen" local="Imran Kazmi" startDate="Nov 29" endDate="Dec 30" location="West Loop" />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card title="Ippudo Ramen" local="Imran Kazmi" startDate="Nov 29" endDate="Dec 30" location="West Loop" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card title="Ippudo Ramen" local="Imran Kazmi" startDate="Nov 29" endDate="Dec 30" location="West Loop" />
          </Col>
        </Row>
      </Grid>;
  }
}
