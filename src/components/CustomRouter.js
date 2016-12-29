import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from './Layout';

export default function CustomRouter() {
  return (
    <Router>
      <Route>
        <IndexRoute path="/" component={Layout}></IndexRoute>
      </Route>
    </Router>
  )
}
