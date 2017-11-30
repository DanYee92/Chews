import styled from "styled-components";
import { Link } from "react-router-dom";

// export const Logo = styled.h1`
//   &:before {
//     content: "[chews]";
//   }
//   color: tomato;

//   font-size: ${props => (props.large ? "3em" : "1.5em")};
// `;
export const Logo = styled.img`
  content: url("./assets/logo_v0.png");
  width: ${props => (props.large ? "15em" : "5em")};
  height: auto;
  margin: 0 auto;
`

// export const LinkedLogo = () => {
//   return (
//     <Link>
//       {Logo}
//     </Link>)
// }

export const LinkedLogo = Logo.withComponent(Link);
