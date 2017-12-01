import styled from "styled-components";
import { FormControl } from "react-bootstrap";

const MySearchBox = styled(FormControl)`
  box-shadow: none;
  border-radius: 0;
  border: 0.12em solid tomato;
  margin: ${props => (props.landing ? "1em auto" : 0)};
  padding: 1em;
  height: ${props => (props.landing ? "3.5em" : "2.5em")};
  &:focus {
    border-color: tomato;
    box-shadow: none;
  }
`;

export default MySearchBox;
