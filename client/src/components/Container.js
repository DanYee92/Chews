import styled from "styled-components";

const Container = styled.div`
  margin: ${props => props.margin || "60px"};
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  text-align: ${props => (props.column ? "center" : "left")};
`;

export default Container;
