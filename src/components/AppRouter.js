import React from "react";
import "../assets/styles/header.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { NavBar } from "../pages/NavBar";
import { HomeScreen } from "../pages/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
