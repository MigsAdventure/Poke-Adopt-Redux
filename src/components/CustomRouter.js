import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from './Layout';

export default function CustomRouter() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout} >
      </Route>
    </Router>
  );
}
