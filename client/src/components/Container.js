import styled from "styled-components";

const Container = styled.div`
  margin: 6em ${props => props.margin || "6em"};
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  text-align: ${props => (props.column ? "center" : "left")};

  @media (max-width: 768px) {
    margin: 3em;
  }
`;

export default Container;
