import React, { useEffect } from "react";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import { withHeader } from "../HOC";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={withHeader(Home)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
