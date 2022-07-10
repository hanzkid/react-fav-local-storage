import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Pagination } from "@material-ui/lab";

import { useEffect } from "react";

import Banner from "../components/Banner";
import CharacterCard from "../components/CharacterCard";
import { fetchCharacter, setPage } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const querySearch = useSelector(({ character }) => character.querySearch);
  const page = useSelector(({ character }) => character.page);
  const characters = useSelector(({ character }) => character.listCharacter);
  const info = useSelector(({ character }) => character.infoResp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter("/character/?page=" + page + "&name=" + querySearch))
  }, [dispatch, page, querySearch]);

  function changePage(event, value) {
    dispatch(setPage(value));
  }

  return (
    <>
      <Banner />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          {characters && characters.map((character) => {
            return (
              <Grid key={character.id} item xs={3}>
                <CharacterCard character={character} key={character.id} />
              </Grid>
            );
          })}
          {
            !characters || characters.length === 0 ? <Grid item xs={3}><h1>Not Found</h1></Grid> : ''
          }
          <Grid container item xs={12} justify="center">
            { info ? <Pagination count={info.pages} page={page} onChange={changePage} /> : ''}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
