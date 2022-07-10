import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useDispatch, useSelector } from "react-redux";

import {
  Link
} from "react-router-dom";

import { addToFav } from "../store/actions";
function CharacterCard({character, enableAction = true} = {}) {

  const dispatch = useDispatch();
  const favorites = useSelector(({favorite}) => favorite.favoritesCharacter);
  
  function addToFavorite(){
    dispatch(addToFav(character))
  }

  function EnableActionComp(props){
    if(props.enableAction){
      return (
        <CardActions>
          { !favorites.some(favorite => favorite.id === character.id) ? <Button size="small" onClick={addToFavorite}>Add To Fav</Button> : '' }
        <Link to={`/character/${character.id}`}>
          <Button size="small">
            Detail
          </Button>
        </Link>
      </CardActions>
      )
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }

  return (
    <Card>
        <CardMedia
          component="img"
          alt={character.name}
          height="220"
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.status}, {character.species},{" "}
            {character.origin.name}
          </Typography>
        </CardContent>
        <EnableActionComp enableAction={enableAction} />
      
    </Card>
  )
}

export default CharacterCard;
