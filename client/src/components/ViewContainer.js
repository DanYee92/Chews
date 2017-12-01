import styled from "styled-components";

const ViewContainer = styled.div`
  margin-top: ${props => (props.biteDetail ? "4.75em" : "10em")};
  @media (max-width: 768px) {
    margin-top: ${props => (props.biteDetail ? "8.7vh" : "10em")};
  }
`;

export default ViewContainer;