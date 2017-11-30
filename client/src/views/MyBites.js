import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

const ThumbnailContainer = styled.div`
	position: relative;
`;

const CardThumbnail = styled.img`
	border-radius: 0.1em;
	border: tomato 0.1em solid;
	padding: none;
`;

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

export const MyBites = props => {
	return (
		<Grid>
			<CardContainer>
				<Row className="show-grid">
					<Col style={noMarginRight} xs={4} md={3}>
						<Image
							src="http://via.placeholder.com/300x200"
							responsive
						/>
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
			</CardContainer>
		</Grid>
	);
};
