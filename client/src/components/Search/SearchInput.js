import React from "react";
import styled from "styled-components";
import muiTheme from "../CustomMUI";

const SearchBoxContainer = styled.div`
  font-family: ${muiTheme.fontFamily};
  position: relative;
  height: ${props => (props.landing ? "4.5em" : "2.5em")};
  width: ${props => (props.landing ? "100%" : "15em")};
  margin: ${props => (props.landing ? "2.5em auto" : "-0.1em 0.1em 0em 0em")};
  @media (max-width: 768px) {
    width: ${props => (props.landing ? "100%" : "65vw")};
  }
`;

const FixedSearchIcon = styled.i.attrs({
  className: "fa fa-search"
})`
  color: tomato;
  float: none;
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: ${props => (props.landing ? "2.1em" : "1em")};
  @media (max-width: 768px) {
    top: 12%;
    left: 6%;
    font-size: ${props => (props.landing ? "1.8em" : "1em")};
  }
`;

const Input = styled.input`
  box-shadow: none;
  border-radius: 40px;
  border: 0.12em solid tomato;
  background: ${props =>
    props.landing ? "rgba(255, 255, 255, 0.8)" : "white"};
  color: gray;
  font-size: ${props => (props.landing ? "1.5em" : "1em")};
  margin-top: -0.5em;
  margin-right: 2em;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  text-indent: ${props => (props.landing ? "6.5vw" : "2em")};
  &:focus {
    box-shadow: none;
    border-color: tomato;
    outline: none;
  }
  @media (max-width: 768px) {
    border: 0.12em solid tomato;
    text-indent: ${props => (props.landing ? "10vw" : "2em")};
  }
`;

const MySearchBox = props => {
  return (
    <SearchBoxContainer {...props}>
      <FixedSearchIcon {...props} />
      <Input {...props} />
    </SearchBoxContainer>
  );
};

export default MySearchBox;
