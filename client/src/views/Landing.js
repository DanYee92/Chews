import React from "react";
import styled from "styled-components"
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "../components/Form";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";
import { Parallax } from "react-parallax";
import muiTheme from "../components/CustomMUI";

const LandingContainer = styled.div`
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: 105vh;
  overflow; hidden
  -webkit-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -45px 113px -44px rgba(0, 0, 0, 0.75);
`;

const BackgroundDarken = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
`;

const View1Container = styled.div`
  height: 95vh;
  background: lightslategrey;
  `;
const View1TextContainer = styled.div`
  padding: 18em 14em 3em 3em;
  width: 77vw;
  font-family: ${muiTheme.fontFamily};
  color: white;
  @media (max-width: 768px) {
    padding: 8em 1em 3em 3em;
    width: 85vw;
  }
`;
// View2 Components 
// ---------------------------------------
const View2Container = styled.div`  
  height: 95vh;
  text-align: center;
`;
const View2TextContainer = styled.div`
  padding: 19em 6em 3em 6em;
  width: 77vw;
  margin: 0 auto;
  font-family: ${muiTheme.fontFamily};
  font-weight: lighter;
  color: lightslategrey;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    padding: 12em 2em 3em 2em;
    width: 100vw;
  }
`;
// ---------------------------------------


const LittleLine = styled.div`
  width: 5em;
  height: 0em;
  margin: ${props => props.centered ? "0 auto" : ""};
  border-bottom: 1px solid ${props => props.color};
`

// Footer Components 
// ---------------------------------------
const FooterContainer = styled.div`
  background: papayawhip;
  height: 20vh;
  padding: 2em;
`
const GitHubLink = styled.i`
color: lightslategrey;
font-size: 5em;
transition: color 0.3s;
&:hover {
  color: tomato;
  }
`
// ---------------------------------------

export class Landing extends React.Component {
  componentWillMount() {
    document.title = "Chews";
  }

  render() {
    return <div>
        <Parallax bgImage={require("../images/restaurant-with-friends.jpg")} strength={380}>
          <LandingContainer>
            <BackgroundDarken>
              <Container column margin="0 10vw" style={{ padding: "25vh 0" }}>
                <Logo large />
                <h2 style={{ color: "white", fontWeight: "lighter" }}>
                  Humanizing the traveler's dining experience
                </h2>
                <form onSubmit={this.props.handleSearchSubmit}>
                  <FormGroup>
                    <MySearchBox landing="true" name="searchQuery" type="text" placeholder="Try 'Chicago'" onChange={this.props.handleInputChange} value={this.props.searchQuery} />
                    <Button type="submit" primary large>
                      Search
                    </Button>
                  </FormGroup>
                </form>
              </Container>
            </BackgroundDarken>
          </LandingContainer>
        </Parallax>

        <View1Container>
          <View1TextContainer>
            <LittleLine color="white" />
            <h3 style={{ fontWeight: "lighter" }}>
              Travelers too often miss out on the local cuisine & culture of their destinations. With
              <span style={{ color: "tomato", fontWeight: "400" }}> Chews</span>
              , locals share their culture and the hidden dining gems of a city. Travelers experience the true culture of the destination.
            </h3>
          </View1TextContainer>
        </View1Container>
        <View2Container>
          <View2TextContainer>
            <LittleLine color="lightslategrey" centered />
            <h1 style={{ fontWeight: "lighter" }}>
              <span style={{ color: "tomato" }}>Chews</span> to support local businesses.
            </h1>
            <h1 style={{ fontWeight: "lighter" }}>
              <span style={{ color: "tomato" }}>Chews</span> to make lifelong connections.
            </h1>
          </View2TextContainer>
        </View2Container>
        <FooterContainer>
          <div style={{ textAlign: "center", width: "100%" }}>
            <a href="https://github.com/youknowme786/Chews" style={{ textDecoration: "none", width: "100%" }}>
              <GitHubLink className="fa fa-github" aria-hidden="true" />
            </a>
          </div>
        </FooterContainer>
      </div>;
  }
};

{/* <span style={{ width: "0", height: "2em", borderRight: "0.05em solid tomato", margin: "0.5em" }} /> */}