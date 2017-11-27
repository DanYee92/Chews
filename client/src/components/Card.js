import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: papayawhip;
  width: 15em;
`;

// ======= Thumbnail Container START ========
const ThumbnailContainer = styled.div`
  position: relative;
`;

const CardTitle = styled.h3`
  color: white;
  position: absolute;
  top: 2em;
  left: 0.25em;
`;

const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 0.1em;
`;
// ======= Thumbnail Container END ========

const CardBody = styled.div`
  color: black;
  margin-top: 1em;
  padding: 0.5em;
`;

const Card = props => {
  return (
    <CardContainer>
      <ThumbnailContainer>
        <CardThumbnail src="http://via.placeholder.com/300x150" />
        <CardTitle>{props.title}</CardTitle>
      </ThumbnailContainer>
      <CardBody>
        <p>with {props.local}</p>
        <p>
          <i
            class="fa fa-calendar-o"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          />
          {props.startDate} - {props.endDate}
        </p>
        <p>
          <i
            class="fa fa-map-marker"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          />
          {props.location}
        </p>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
