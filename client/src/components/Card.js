import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: papayawhip;
  width: 18em;
  margin-bottom: 2.5em;
`;

// ======= Thumbnail Container START ========
const ThumbnailContainer = styled.div`
  position: relative;
`;

const CardTitle = styled.h3`
  color: white;
  position: absolute;
  top: 4.5em;
  left: 0.5em;
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
const Card = ({ title, local, startDate, endDate, location }) => {
  return (
    <CardContainer>
      <ThumbnailContainer>
        <CardThumbnail src="http://via.placeholder.com/300x200" />
        <CardTitle>{title}</CardTitle>
      </ThumbnailContainer>
      <CardBody>
        <p>with {local}</p>
        <p>
          <i
            className="fa fa-calendar-o"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          />
          {startDate} - {endDate}
        </p>
        <p>
          <i
            className="fa fa-map-marker"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          />
          {location}
        </p>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
