import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

const Topic = () => {
  const { params } = useParams();
  console.log(params);
  return (<h2>Topic =: {params}</h2>)
};

const TopicNotSelected = () => { return (<h2>Another Components</h2>) }

const Topics = () => {
  let match = useRouteMatch();

  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li><Link to={`${match.url}/components-test-url`}>Components</Link></li>
        <li><Link to={`${match.url}/props-test-url`}>Props</Link></li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:params`} component={Topic}></Route>
        
        <Route path={`${match.path}`} component={TopicNotSelected}></Route>
      </Switch>
    </>)
}

export default Topics;