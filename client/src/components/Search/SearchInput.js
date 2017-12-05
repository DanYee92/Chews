import React from "react";
import styled from "styled-components";
import muiTheme from "../CustomMUI";

const SearchBoxContainer = styled.div`
  font-family: ${muiTheme.fontFamily};
  position: relative;
  height: ${props => (props.landing ? "4.5em" : "2.5em")};
  width: ${props => (props.landing ? "100%" : "14em")};
  margin: ${props => (props.landing ? "3em auto" : "0.15em")};
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
  color: gray;
  font-size: ${props => (props.landing ? "1.5em" : "1em")};
  margin-top: -0.5em;
  margin-right: 1em;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  text-indent: ${props => (props.landing ? "5.5vw" : "2em")};
  &:focus {
    box-shadow: none;
    border-color: tomato;
    outline: none;
  }
  @media (max-width: 768px) {
    border: 0.12em solid tomato;
    text-indent: ${props => (props.landing ? "8vw" : "2em")};
  }
`;

const MySearchBox = props => {
  return <SearchBoxContainer {...props}>
      <FixedSearchIcon {...props} />
      <Input {...props} />
    </SearchBoxContainer>;
}
  
export default MySearchBox;
