import React from "react";
import API from "../util/API";
import { Grid, Row, Col } from "react-bootstrap";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

export class SearchResults extends React.Component {
  state = { searchResults: [], searchQuery: this.props.match.params.searchQuery};

  componentDidMount() {
    console.log("componentDidMount, state:", this.state)
    API.searchForBites(this.state.searchQuery).then(
      res => {
        console.log(res);
        Promise.resolve(
          this.setState({ searchResults: res.data })
        ).then(() => {
          console.log("done searching");
          console.log(
            "this.state.searchResults",
            this.state.searchResults
          );
          console.log("end componentDidMount")
        });
      }
    );
  }

  componentWillReceiveProps() {
    console.log("component will receive props", this.state)
    API.searchForBites(this.state.searchQuery).then(res => {
      console.log(res);
      Promise.resolve(this.setState({
          searchResults: res.data
        })).then(() => {
        console.log("done searching");
        console.log("this.state.searchResults", this.state.searchResults);
        console.log("end component will receive props");
      });
    });
  }

  render() {
    return <Grid>
        <Row className="show-grid">
          {/* dynamically generate here */}
          {this.state.searchResults ? this.state.searchResults.map(
              (bite, i) => {
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
          ) : "No results"}

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
