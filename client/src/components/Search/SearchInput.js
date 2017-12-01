import styled from "styled-components";
import { FormControl } from "react-bootstrap";

const MySearchBox = styled.input`
  box-shadow: none;
  border-radius: 0;
  border: 0.12em solid tomato;
  color: gray;
  margin: ${props => (props.landing ? "1em auto" : 0)};
  margin-top: -0.5em;
  padding: 1em;
  height: ${props => (props.landing ? "3.5em" : "2.5em")};
  width: ${props => (props.landing ? "100%" : "14em")};
  &:focus {
    border-color: tomato;
    box-shadow: none;
    outline: none;
  }
  `;
  
  /* padding: ${props => (props.landing ? "1em" : "0em")}; */
export default MySearchBox;
