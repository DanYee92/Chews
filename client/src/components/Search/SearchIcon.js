import React from "react";
import styled from "styled-components";

const MySearchIcon = styled.i`
  color: tomato;
  float: right;
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchIcon = props => (
  <MySearchIcon
    className={props.icon ? "fa fa-minus-circle" : "fa fa-search"}
    onClick={props.onClick}
  />
);
