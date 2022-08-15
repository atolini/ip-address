import { useEffect } from "react";
import { Bootstrap } from "@ip-address/features";
import { Title, Paragraph } from "@ip-address/design"; 
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";
import { Container } from "./App.styles";
import Home from "./pages/Home";

function App() {
  const bootstrap = useSelector((state: RootState) => state.global.bootstrap);

  useEffect(() => {
    Bootstrap();
  }, []);

  if (bootstrap === "pending") 
    return (
      <Container>
        <Oval height="50" width="50" color="black" secondaryColor="#5d5c5e" />
      </Container>
    );
  if (bootstrap === "rejected")
    return (
      <Container>
        <Title>Error</Title>
        <Paragraph onClick={() => Bootstrap()}>Try again?</Paragraph>
      </Container>
    );
  return <Home/>;
}

export default App;
