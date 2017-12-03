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
            {this.state.myBites ? this.state.myBites.map((bite, i) => {
    const restaurant = bite.restaurant
    const travelerId = bite.travelerId;
    const localId = bite.localId
    const name = (() => {
      // if there is a traveler id and the user is the local
      if(travelerId && this.props.userId === localId._id) {
        // return the traveler's name
        return `${restaurant} with ${travelerId.firstName} ${travelerId.lastName}`
      // else if there is a traveler id and the user is the traveler
      } else if (travelerId && this.props.userId === travelerId._id) {
        // return the local's name
        return `${restaurant} with ${localId.firstName} ${localId.lastName}`;
      // else if there is no traveler id
      } else { 
        // don't return any name
        return `${restaurant}`
      }
    })()

		return <div key={i}>
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <Image src="http://via.placeholder.com/300x200" responsive />
          </Col>
          <Col style={noPadding} xs={8} md={9}>
            <CardBody>
              <BiteInfo>
                <p>
                  {name}
                </p>
                <p>{bite.city}</p>
              </BiteInfo>
              {/* insert bite date formatting here */}
              <BiteDate>
                <BiteMonth> NOV </BiteMonth>
                <BiteDay> 14 </BiteDay>
              </BiteDate>
            </CardBody>
          </Col>
        </Row>
      </div>;
        }) : <Row>
              <Col xs={12} md={12}>
                <h2>All Upcoming Bites</h2>
                <Paper style={paperStyles}>
                  <BookedStatusIcon color="green" className={props.icon ? "fa fa-hourglass-o" : "fa fa-check"} />

                  <BiteBody>
                    <h3>Jim's Original</h3>
                    with <h4>Andrew Huang</h4>
                    <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
                    Chicago
                  </BiteBody>
                </Paper>
              </Col>
            </Row>}
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
