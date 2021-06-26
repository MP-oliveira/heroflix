import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from './pages/details/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
		<Route path="/hero/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
