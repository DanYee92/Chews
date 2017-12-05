import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../components/CustomMUI";

const paperStyles = {
  fontFamily: muiTheme.fontFamily,
  width: "100%",
  background: "white",
  marginBottom: "2.5em"
};

// ======= Thumbnail Container START ========
const ThumbnailContainer = styled.div`
  position: relative;
`;

const CardTitle = styled.h3`
  color: white;
  position: absolute;
  bottom: 0.5em;
  left: 0.75em;
`;

const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 0.1em;
`;
// ======= Thumbnail Container END ========

const CardBody = styled.div`
  color: black;
  margin-top: 1em;
  padding: 0.75em;
`;

// Card takes in props: title, local, startDate, endDate, location
const Card = ({ title, local, startDate, endDate, location, biteLink }) => {
  console.log("biteLink:", biteLink);
  console.log("typeof biteLink:", typeof biteLink)
  return <MuiThemeProvider>
  <Paper style={paperStyles}>
      <Link to={`${biteLink}`}>
        <ThumbnailContainer>
          <CardThumbnail src="http://via.placeholder.com/300x200" />
          <CardTitle>{title}</CardTitle>
        </ThumbnailContainer>
      </Link>
      <CardBody>
        <p>with {local}</p>
        <p>
          <i className="fa fa-calendar-o" aria-hidden="true" style={{ marginRight: "0.5em" }} />
          {startDate} - {endDate}
        </p>
        <p>
          <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
          {location}
        </p>
      </CardBody>
    </Paper>
    
  </MuiThemeProvider>
};

export default Card;
