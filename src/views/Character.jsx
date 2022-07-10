import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailCharacter } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Banner from "../components/Banner";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Character() {
  const dispatch = useDispatch();
  const character = useSelector(({ character }) => character.character);
  let { id } = useParams();


  useEffect(() => {
    dispatch(fetchDetailCharacter("/character/" + id));
  }, [dispatch, id]);

  return (
    <>
      <Banner />
      <Container style={{ marginTop: "32px" }}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                alt={character.name}
                height="440"
                image={character.image}
                title={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {character.name}
                </Typography>
                <List>
                  <ListItem key={1}>
                    <ListItemText
                      primary={character.status}
                      secondary={"Status"}
                    />
                  </ListItem>
                  <ListItem key={2}>
                    <ListItemText
                      primary={character.species}
                      secondary={"Species"}
                    />
                  </ListItem>
                  <ListItem key={3}>
                  <ListItemText
                    primary={character.origin?.name}
                    secondary={"Origin"}
                  />
                </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
          <Card>
            <CardHeader title={`Episode List`}>
            </CardHeader>
            <CardContent>
              <List dense={true}>
              {
                character.episode && character.episode.map((char, i) => {
                  const episodeArray = char.split('/');
                  return (
                    <ListItem  style={{ textTransform: 'capitalize' }} >
                      <ListItemText key={i} primary={episodeArray[episodeArray.length-2]+ ' ' +episodeArray[episodeArray.length-1]} secondary={char}/>
                    </ListItem>
                  )
                })
              }
              </List>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Character;
