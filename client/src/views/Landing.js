import React from "react";
import styled from "styled-components"
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "../components/Form";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";

const LandingContainer = styled.div`
  background-image: url(${require("../images/restaurant-with-friends.jpg")});
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: auto
`

const BackgroundDarken = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`;


export class Landing extends React.Component {
  componentWillMount() {
    document.title = "Chews";
  }

  render() {
    return <LandingContainer>
      <BackgroundDarken>  
        <Container column margin="0 20vw" style={{padding: "25vh 0"}}>
          <Logo large />
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
    </LandingContainer>;
  }
};
