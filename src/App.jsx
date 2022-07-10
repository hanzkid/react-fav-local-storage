import React from "react";
import "./App.css"; // Tell webpack that Button.js uses these styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Character from "./views/Character";
import Home from "./views/Home";
import Favorite from "./views/Favorite";
import Navbar from "./components/Navbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoadingState } from "./store/actions";

export default function App() {
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const querySearch = useSelector(({ character }) => character.querySearch);
  const page = useSelector(({ character }) => character.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingState(true));
  },[page, querySearch,dispatch])

  function loadingBg() {
    return (
      <div>
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/favorites">
          <Favorite />
        </Route>
        <Route path="/">{isLoading ? loadingBg : <Home />}</Route>
      </Switch>
    </Router>
  );
}
