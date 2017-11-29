import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// Card takes in props: title, local, startDate, endDate, location
import Card from "../components/Card";

const ThumbnailContainer = styled.div`
	position: relative;
	display: flex;
`;

const CardThumbnail = styled.img`
	height: auto;
	border-radius: 0.1em;
	border: tomato 0.1em solid;
	padding: none;
`;

const CardContainer = styled.div`
	background: papayawhip;
	margin-bottom: 2.5em;
	border: tomato 0.1em solid;
`;

const CardBody = styled.div`
	color: black;
	padding: 0.75em;
`;

const noPadding = {
	padding: "none",
	margin: "none",
	border: "1em solid"
};

export const MyBites = props => {
	//get the user's booked bites on component load
	return (
		<Grid>
			<Row className="show-grid">
				<Col xs={3}>
					<CardThumbnail src="http://via.placeholder.com/300x200" />
				</Col>
				<Col xs={9}>
					<CardContainer>
						<CardBody>
							<div>
								<p> Jim's Original </p>
								<p> with Andrew Huang </p>
								<p> Chicago </p>
							</div>
						</CardBody>
					</CardContainer>
				</Col>
			</Row>
		</Grid>
	);
};
