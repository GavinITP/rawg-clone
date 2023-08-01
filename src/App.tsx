import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side main"` }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem bg="blue.300" area="side">
          Sidebar
        </GridItem>
      </Show>

      <GridItem bg="pink.300" area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
