import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side main"` }}>
      <GridItem bg="orange.300" area="nav">
        Nav
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
