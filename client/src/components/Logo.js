import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.h1`
  &:before {
    content: "[chews]";
  }
  color: tomato;
  text-align: center
  font-size: ${props => (props.large ? "3em" : "1em")};
`;

export const LinkedLogo = Logo.withComponent(Link);

export default Logo;
