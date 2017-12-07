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
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around
  `
const View1TextContainer = styled.div`
  padding: 8em 14em 3em 3em;
  width: 77vw;
  font-family: ${muiTheme.fontFamily};
  background: white;
`
const View2Container = styled.div`
  height: 92vh;
`;
const View2TextContainer = styled.div`
  padding: 8em 14em 3em 3em;
  width: 77vw;
  font-family: ${muiTheme.fontFamily};
  background: white;
  white-space: pre-wrap;
`;
const LittleLine = styled.div`
  background: black;
  width: 8em;
  height: 0em;
  border-bottom: 1px solid black;
`

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
            <LittleLine />
            <h3 style={{ fontWeight: "lighter" }}>
              Travelers going places and not experience the local cuisine /
              culture It is very easy for a traveler to just go somewhere
              they are comfortable and familiar with Franchise restaurants
              edge out and suffocate local businesses
            </h3>
          </View1TextContainer>
        </View1Container>
        <View2Container>
          <View2TextContainer>
            <LittleLine />
            <h3 style={{ fontWeight: "lighter" }}>
              {`Locals share their culture and expose the hidden gems of a city. Travelers experience the true culture of your destination. 
              
Support local businesses. Make lifelong connections.`}
            </h3>
          </View2TextContainer>
        </View2Container>
      </div>;
  }
};
