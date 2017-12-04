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
  margin: "1em 0"
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
const BiteBody = styled.div`
	padding: 0em;
	color: black;
	width: 70%;
	text-indent: 2em;
`
const BookedStatusIcon = styled.i`
	padding: 0.5em;
	border: 3px solid green;
	border-radius: 50%;
	font-size: 3.5em;
	color: ${props => props.color ? props.color : "orange"};
`
export class MyBites extends React.Component {
	state = {
		myBites: null
	}

	componentDidMount() {
		console.log("my-bites componentDidMount")
		console.log(this.props.userId)
		API.getUserInfo(this.props.userId)
      .then(res => {
        let myBites = []
        
        if (res.data[0].bites) {
          res.data[0].bites.map(bite => {
            let travelerId = null
            let localId = null

            if(bite.travelerId) {
              travelerId = bite.travelerId;
            }
            if(bite.localId) {
              localId = bite.localId;
            }

            const thisBite = {
              _id: bite._id,
              biteDate: bite.biteDate,
              restaurant: bite.restaurant,
              city: bite.city,
              startDateRange: bite.startDateRange,
              endDateRange: bite.endDateRange,
              isBooked: bite.isBooked,
            };

            // if there is a traveler id and the user is the local
            if (travelerId && this.props.userId === localId._id) {
              // record the traveler as the other party
              thisBite.otherParty = travelerId;
              // else if there is a traveler id and the user is the traveler
            } else if (travelerId && this.props.userId === travelerId._id) {
              // record the local as the other party
              thisBite.otherParty = localId;
              // else if there is no traveler id
            } else {
              // don't record any name
              thisBite.otherParty = null;
            }

            myBites.push(thisBite);
            console.log(myBites);
          });
        } else {
          myBites = null;
        }

        this.setState({ myInfo: res.data, myBites: myBites });

      })
      .catch(err => console.error(err));
		
		// API.getUserInfo("auth0|5a2171e2083226773d5c2f4a")
		// 	.then(res => console.log(res.data[0].bites))
  }
  
	render() {
    console.log()
  
    return <MuiThemeProvider>
      <Tabs>
        <Tab label="All Upcoming" value="a">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <h2>All Upcoming Bites</h2>

                {this.state.myBites ? this.state.myBites.map((bite, i) => {
                    return <Paper style={paperStyles} key={i}>
                        <BookedStatusIcon color="green" className={this.props.icon ? "fa fa-hourglass-o" : "fa fa-check"} />
                        <BiteBody>
                          <h3>{bite.restaurant}</h3>
                          with <h4>{bite.otherParty ? `${bite.otherParty.firstName} ${bite.otherParty.lastName}` : "nobody yet"}</h4>
                          <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
                          {bite.city}
                          {/* insert bite date formatting here */}
                          <div>
                            <div> NOV </div>
                            <div> 14 </div>
                          </div>
                        </BiteBody>
                      </Paper>;
                  }) : <Paper style={paperStyles}>
                    <BookedStatusIcon color="green" className={this.props.icon ? "fa fa-hourglass-o" : "fa fa-check"} />
                    <BiteBody>
                      <h3>Jim's Original</h3>
                      with <h4>Andrew Huang</h4>
                      <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
                      Chicago
                    </BiteBody>
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


// const ThumbnailContainer = styled.div`
// 	position: relative;
// `;

// const CardThumbnail = styled.img`
// 	border-radius: 0.1em;
// 	border: tomato 0.1em solid;
// 	padding: none;
// `;

// const CardContainer = styled.div`
// 	background: papayawhip;
// 	margin-bottom: 2.5em;
// `;

// const CardBody = styled.div`
// 	color: black;
// 	position: relative;
// `;

// const BiteDate = styled.div`
// 	display: inline block;
// 	border: tomato 0.1em solid;
// 	padding: 0em 0.5em 0em 0.5em;
// 	margin-bottom: 0em;
// 	background: white;
// 	position: absolute;
// 	text-align: center;
// 	top: 0.5em;
// 	right: 1.5em;
// 	clear: both;
// `;

// const BiteMonth = styled.p`
// 	font-size: 10px;
// 	margin-bottom: 0em;
// 	border-bottom: tomato 0.1em solid;
// `;

// const BiteDay = styled.p`
// 	font-size: 15px;
// 	margin-bottom: 0em;
// `;
