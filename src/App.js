import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import About from "./conponents/About";
import Home from "./conponents/Home";
import Topics from "./conponents/Topics";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="d-flex" id="wrapper">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Code with me</div>
            <div className="list-group list-group-flush">

              <Link to="/" className="list-group-item list-group-item-action bg-light">Home</Link>
              <Link to="#" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
              <Link to="/about" className="list-group-item list-group-item-action bg-light">About</Link>
              <Link to="/topics" className="list-group-item list-group-item-action bg-light">Topics</Link>

            </div>
          </div>

          <div id="page-content-wrapper">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <h3>hello world</h3>
            </nav>

            <div className="container-fluid">
              <Switch>
                <Route path="/about"><About /></Route>
                <Route path="/topics"><Topics /></Route>
                <Route path="/"><Home /></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
