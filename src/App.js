/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Body from "./components/Body/body";
import PostingDetails from "./components/PostingDetails/postingDetails";

function App() {
  const { pathname } = useLocation();
  return (
    <div data-test="app">
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Body} />
        <Route exact path="/posting/:id" component={PostingDetails} />
      </Switch>
    </div>
  );
}

export default App;
