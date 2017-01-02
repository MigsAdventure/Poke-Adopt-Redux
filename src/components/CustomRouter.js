import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from './Layout';
import AdoptPage from './AdoptPage';

export default function CustomRouter() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout} >
        <IndexRoute component={AdoptPage} />
      </Route>
    </Router>
  );
}
