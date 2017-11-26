import styled from "styled-components";

export const Logo = styled.h1`
  &:before {
    content: "[chews]";
  }
  // text-align: center;
  font-size: ${props => (props.large ? "3em" : "1em")};
`;

export const LinkedLogo = Logo.withComponent("a");

export default Logo;
