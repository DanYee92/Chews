import React from "react";
import styled from "styled-components";
import muiTheme from "../CustomMUI";

const SearchBoxContainer = styled.div`
  font-family: ${muiTheme.fontFamily};
  position: relative;
  height: ${props => (props.landing ? "3.5em" : "2.5em")};
  width: ${props => (props.landing ? "100%" : "14em")};
  margin: ${props => (props.landing ? "3em auto" : 0)};
`;

const FixedSearchIcon = styled.i.attrs({
  className: "fa fa-search"
})`
  color: tomato;
  float: none;
  position: absolute;
  top: 14%;
  left: 6%;
  font-size: ${props => (props.landing ? "1.5em" : "1em")};
`;

const Input = styled.input`
  box-shadow: none;
  border-radius: 25px;
  border: 0.12em solid tomato;
  color: gray;
  margin-top: -0.5em;
  margin-right: 1em;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  text-indent: ${props => (props.landing ? "3.5em " : "2em")};
  &:focus {
    box-shadow: none;
    border-color: tomato;
    outline: none;
  }
`;

const MySearchBox = props => {
  return <SearchBoxContainer {...props}>
      <FixedSearchIcon {...props} />
      <Input {...props} />
    </SearchBoxContainer>;
}
  
export default MySearchBox;
