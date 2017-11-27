import styled from "styled-components";

export const Logo = styled.h1`
  &:before {
    content: "[chews]";
  }
  color: tomato;

  font-size: ${props => (props.large ? "3em" : "1.5em")};
`;

export const LinkedLogo = Logo.withComponent("a");

export default Logo;
