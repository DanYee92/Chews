import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import API from "../util/API";
import styled from "styled-components";

// Card takes in props: title, local, startDate, endDate, location
// import Card from "../components/Card";

// const ThumbnailContainer = styled.div`
// 	position: relative;
// `;

// const CardThumbnail = styled.img`
// 	border-radius: 0.1em;
// 	border: tomato 0.1em solid;
// 	padding: none;
// `;

const CardContainer = styled.div`
background: papayawhip;
margin-bottom: 2.5em;
`;

const CardBody = styled.div`
color: black;
position: relative;
`;

const BiteDate = styled.div`
display: inline block;
border: tomato 0.1em solid;
padding: 0em 0.5em 0em 0.5em;
margin-bottom: 0em;
background: white;
position: absolute;
text-align: center;
top: 0.5em;
right: 1.5em;
clear: both;
`;

const BiteMonth = styled.p`
font-size: 10px;
margin-bottom: 0em;
border-bottom: tomato 0.1em solid;
`;

const BiteDay = styled.p`
font-size: 15px;
margin-bottom: 0em;
`;

const BiteInfo = styled.h5`
width: 100%;
float: left;
`;

const noPadding = {
	padding: "0em",
	margin: "0em"
};

const noMarginRight = {
	marginRight: "0em"
};

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
	// return this.props.userId ? 
	return <Grid>
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

		return <CardContainer key={i}>
        <Row className="show-grid">
          <Col style={noMarginRight} xs={4} md={3}>
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
      </CardContainer>;
        }) : <CardContainer>
          <Row className="show-grid">
            <Col style={noMarginRight} xs={4} md={3}>
              <Image src="http://via.placeholder.com/300x200" responsive />
            </Col>
            <Col style={noPadding} xs={8} md={9}>
              <CardBody>
                <BiteInfo>
                  <p>Jim's Original with Andrew Huang</p>
                  <p>Chicago</p>
                </BiteInfo>
                <BiteDate>
                  <BiteMonth> NOV </BiteMonth>
                  <BiteDay> 14 </BiteDay>
                </BiteDate>
              </CardBody>
            </Col>
          </Row>
        </CardContainer>}
	</Grid>
	// : <div>{this.props.history.replace("/")}</div>
	}
};
