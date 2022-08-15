import React from "react";
import Search from "../components/search-input/Search";
import Logo from "../components/logo/Logo";
import Card from "../components/card/Card";
import { Container, Header, MapContainer } from "./Home.styles";
import Background from "./pattern-bg.png";
import Map from "../components/map/Map";

const Home: React.FC = () => {
  return (
    <Container>
      <Header image={Background}>
        <Logo />
        <Search />
        <Card />
      </Header>
      <MapContainer>
        <Map />
      </MapContainer>
    </Container>
  );
};

export default Home;
