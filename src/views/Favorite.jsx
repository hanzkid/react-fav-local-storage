import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CharacterCard from "../components/CharacterCard";
import Banner from "../components/Banner";

function Favorite() {
  const favorites = useSelector(({favorite}) => favorite.favoritesCharacter);

  return (
    <>
      <Banner />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          {favorites.map((character) => {
            return (
              <Grid key={character.id} item xs={3}>
                <CharacterCard character={character} enableAction={false} key={character.id} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Favorite;
