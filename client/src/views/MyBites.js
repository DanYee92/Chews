import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


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

// const BiteInfo = styled.h5`
// 	width: 100%;
// 	float: left;
// `;

// const noPadding = {
// 	padding: "0em",
// 	margin: "0em"
// };

// const noMarginRight = {
// 	marginRight: "0em"
// };
const paperStyles = {
	width: "100%",
	height: "10em",
	background: "papayawhip",
}
const BiteImg = styled.img`
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
export const MyBites = props => {
	return <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Paper style={paperStyles}>
              <BiteImg src="http://via.placeholder.com/300x200" />
              <BiteBody>
                <h3>Jim's Original</h3>
                with <h4>Andrew Huang</h4>
                <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
								Chicago
              </BiteBody>
							<BiteDate>
								NOV <Divider /> <h4>29</h4>
							</BiteDate>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>;
}
// export const MyBites = props => {
// 	return (
// 		<Grid>
// 			{props.results ? props.results.map((bite, i) => {
// 					return (<CardContainer key={i}>
// 						<Row className="show-grid">
// 							<Col style={noMarginRight} xs={4} md={3}>
// 								<Image src="http://via.placeholder.com/300x200" responsive />
// 							</Col>
// 							<Col style={noPadding} xs={8} md={9}>
// 								<CardBody>
// 									<BiteInfo>
// 									<p>{bite.restaurant} with {bite.firstName} {bite.lastName}</p>
// 									<p>{bite.city}</p>
// 									</BiteInfo>
// 									{/* insert bite date formatting here */}
// 									<BiteDate>
// 									<BiteMonth> NOV </BiteMonth>
// 									<BiteDay> 14 </BiteDay>
// 									</BiteDate>
// 								</CardBody>
// 							</Col>
// 						</Row>
// 					</CardContainer>)
// 				}) : <CardContainer>
// 					<Row className="show-grid">
// 						<Col style={noMarginRight} xs={4} md={3}>
// 							<Image
// 								src="http://via.placeholder.com/300x200"
// 								responsive
// 							/>
// 						</Col>
// 						<Col style={noPadding} xs={8} md={9}>
// 							<CardBody>
// 								<BiteInfo>
// 									<p>Jim's Original with Andrew Huang</p>
// 									<p>Chicago</p>
// 								</BiteInfo>
// 								<BiteDate>
// 									<BiteMonth> NOV </BiteMonth>
// 									<BiteDay> 14 </BiteDay>
// 								</BiteDate>
// 							</CardBody>
// 						</Col>
// 					</Row>
// 				</CardContainer>
// 			}
// 		</Grid>
// 	);
// };
