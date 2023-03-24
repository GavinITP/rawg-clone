import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem bg="coral" area="nav">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area="aside">
          Side
        </GridItem>
      </Show>
      <GridItem bg="grey" area="main">
        Content
      </GridItem>
    </Grid>
  );
}

export default App;
