import React from "react";
import API from "../util/API";
import { Grid, Row, Col } from "react-bootstrap";
import moment from "moment";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

export class SearchResults extends React.Component {
  state = { searchResults: [], searchQuery: this.props.match.params.searchQuery};

  componentWillMount() {
    document.title = "Search Results | Chews";

    API.searchForBites(this.state.searchQuery).then(res =>
      this.setState({ searchResults: res.data })
    );
  }

  componentWillReceiveProps() {
    console.log("componentDidUpdate()")
    this.setState({searchQuery: this.props.match.params.searchQuery})
  }

  render() {
    return <Grid>
        <Row className="show-grid">
          <h4 style={{marginLeft: "1em", fontWeight: "lighter"}}>Search Results for <span style={{fontWeight:"normal"}}>"{this.state.searchQuery}"</span></h4>
          {/* dynamically generate here */}
          {this.props.searchResults ? this.props.searchResults
            .filter(bite => {
              const parsedBiteDate = Date.parse(bite.biteDate) || Date.parse(bite.endDateRange);
              const now = Date.now();
              console.log("bite.endDateRange:", bite.endDateRange, "parsedBiteDate:", parsedBiteDate, "now:", now);
              return parsedBiteDate > now;
            })
            .map((bite, i) => {
              console.log("USING PROPS");
              return <Col key={i} xs={12} sm={6} md={4} lg={3}>
                  <Card title={bite.restaurant} local={`${bite.localId.firstName} ${bite.localId.lastName}`} startDate={moment(bite.startDateRange).format("ll")} endDate={moment(bite.endDateRange).format("ll")} location={bite.city} biteLink={`/bite/detail/${bite._id}`} />
                </Col>;
            }) : this.state.searchResults
            .filter(bite => {
              const parsedBiteDate = Date.parse(bite.biteDate) || Date.parse(bite.endDateRange);
              const now = Date.now();
              console.log("bite.endDateRange:", bite.endDateRange, "parsedBiteDate:", parsedBiteDate, "now:", now);
              return parsedBiteDate > now;
            })
            .map((bite, i) => {
              console.log("USING PROPS");
              return <Col key={i} xs={12} sm={6} md={4} lg={3}>
                  <Card title={bite.restaurant} local={`${bite.localId.firstName} ${bite.localId.lastName}`} startDate={moment(bite.startDateRange).format("ll")} endDate={moment(bite.endDateRange).format("ll")} location={bite.city} biteLink={`/bite/detail/${bite._id}`} />
                </Col>;
            })
          }
          {/* to here */}
        </Row>
      </Grid>;
  }
}
