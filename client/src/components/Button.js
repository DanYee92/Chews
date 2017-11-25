import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-align: center;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: ${props => (props.primary ? "white" : "tomato")};
  border: ${props => (props.primary ? "2px solid tomato" : "none")};
  background: ${props => (props.primary ? "tomato" : "transparent")};
  &:hover {
    background: white;
    color: tomato;
    text-decoration: ${props => (props.primary ? "none" : "underline")};
  }
`;

export default StyledButton;
