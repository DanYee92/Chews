import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import API from "../util/API";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import Button from "../components/Button";


const paperStyles = {
	width: "100%",
	height: "10em",
  background: "papayawhip",
	margin: "1em 0",	
	position: "relative"
}
const BiteImg = styled(Image)`
	height: 100%;
	float: left;
`
const BiteDate = styled.div`
	height: 8em;
	width: 8em;
	border: 0.5em solid tomato;
	background: white;
	
	color: tomato;
	padding: 0.5em 2em;
	text-align: center;
	position: absolute;
	right: 2.5em;
	top: 2.5em
`
const Divider = styled.hr`
	border: 1px solid tomato
`
const BiteBody = styled.span`
	color: black;
	position: absolute;
	left: 10em;
	width: 15em
`
const BookedStatusIcon = styled.i`
	padding: 0.5em;
	margin: 0.3em;
	border: 3px solid green;
	border-radius: 50%;
	font-size: 3.5em;
	color: ${props => props.color ? props.color : "orange"};
`
const SeeMoreButton = Button.extend`
	background: transparent;
	position: absolute;
	bottom: 2em;
	right: 2em	
`
export class MyBites extends React.Component {
	state = {
		myBites: null
	}

	componentDidMount() {
		console.log("my-bites componentDidMount")
		console.log(this.props.userId)
		API.getUserInfo(this.props.userId)
    .then(res => this.setState({myBites: res.data[0].bites}))
    .catch(err => console.error(err))
		
		// API.getUserInfo("auth0|5a2171e2083226773d5c2f4a")
		// 	.then(res => console.log(res.data[0].bites))
  }
  
	render() {
  
	return <MuiThemeProvider>
      <Tabs>
        <Tab label="All Upcoming" value="a">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <h2>All Upcoming Bites</h2>

                {this.state.myBites ? this.state.myBites.map((bite, i) => {
                    const restaurant = bite.restaurant;
                    const travelerId = bite.travelerId;
                    const localId = bite.localId;
                    const name = (() => {
                      // if there is a traveler id and the user is the local
                      if (travelerId && this.props.userId === localId._id) {
                        // return the traveler's name
                        return <div>
                            <h3>{restaurant}</h3> with <h4>
                              {travelerId.firstName} {travelerId.lastName}
                            </h4>
                          </div>;
                        // else if there is a traveler id and the user is the traveler
                      } else if (travelerId && this.props.userId === travelerId._id) {
                        // return the local's name
                        return <div>
                            <h3>{restaurant}</h3> with <h4>
                              {localId.firstName} {localId.lastName}
                            </h4>
                          </div>;
                        // else if there is no traveler id
                      } else {
                        // don't return any name
                        return <h3>{restaurant}</h3>;
                      }
                    })();

                    return <Paper style={paperStyles} key={i}>
                        <BookedStatusIcon color="green" className={this.props.icon ? "fa fa-hourglass-o" : "fa fa-check"} />
                        <BiteBody>
                          {name}
                          <p>{bite.city}</p>

                          {/* insert bite date formatting here */}
                          <div>
                            <div> NOV </div>
                            <div> 14 </div>
                          </div>
                        </BiteBody>
                      </Paper>;
									}) : <Paper style={paperStyles} 
													children={
													<div>
														<BookedStatusIcon color="green" className={this.props.icon ? "fa fa-hourglass-o" : "fa fa-check"} />
														<BiteBody>
															<h3>Jim's Original</h3>
															with <h4>Andrew Huang</h4>
															<i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
															Chicago
														</BiteBody>
														<SeeMoreButton primary>See Details</SeeMoreButton>

													</div>}>
                  </Paper>}
              </Col>
            </Row>
          </Grid>
        </Tab>
        <Tab label="Booked" value="b" />
        <Tab label="Pending" value="c" />
        <Tab label="Past Bites" value="d" />
      </Tabs>
    </MuiThemeProvider>;
  }
}

