import React from "react";
import styled from "styled-components";

const Close = styled.button`
  &:hover {
    cursor: pointer;
  }
  float: right;
  color: gray;
  background: none;
  border: none;
`;

const CloseBtn = props => {
  return <Close {...props}>X</Close>;
};

export default CloseBtn;
