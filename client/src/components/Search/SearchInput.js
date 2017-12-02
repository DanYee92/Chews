import React from "react";
import styled from "styled-components";

const SearchBoxContainer = styled.div`
  position: relative;
  height: ${props => (props.landing ? "3.5em" : "2.5em")};
  width: ${props => (props.landing ? "100%" : "14em")};
`;

const FixedSearchIcon = styled.i.attrs({
  className: "fa fa-search"
})`
  color: tomato;
  float: none;
  position: absolute;
  top: 14%;
  left: 7%;
  font-size: ${props => (props.landing ? "1.5em" : "1em")};
`;

const Input = styled.input`
  box-shadow: none;
  border-radius: 0;
  border: 0.12em solid tomato;
  color: gray;
  margin: ${props => (props.landing ? "1em auto" : 0)};
  margin-top: -0.5em;
  margin-right: 1em;
  padding: 0.5em;
  width: 90%;
  height: 100%;
  text-indent: ${props => (props.landing ? "3.5em " : "2em")};
  &:focus {
    border-color: tomato;
    box-shadow: none;
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
