import { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchCharacter, setQuerySearch } from "../store/actions";
import _ from "lodash";

function Navbar() {
  const querySearch = useSelector(({ character }) => character.querySearch);
  const page = useSelector(({ character }) => character.page);
  const [endpoint, setEndpoint] = useState("/character/?name=" + querySearch + "&page=" + page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(endpoint));
  }, [dispatch, endpoint]);

  useEffect(() => {
    setEndpoint("/character/?name=" + querySearch);
  }, [querySearch]);

  function changeQuerySearch(event){
    dispatch(setQuerySearch(event.target.value))
  }

  const useStyles = makeStyles((theme) => ({
    root: {},
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
        <Link to="/" className={classes.title} >
          <Typography color="textSecondary" variant="h6" noWrap>
            Rick & Morty
          </Typography>
          </Link>
          <Link to="/favorites">
            <Typography
              color="textSecondary"
              variant="body1"
              style={{ marginRight: "16px" }}
              noWrap
            >
              Favorites
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={_.debounce(changeQuerySearch,1000)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
