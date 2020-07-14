import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from './Error';
import Layout from './Layout';
import Landing from './Landing';
import Result from './Result';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/result" component={Result} />
        <Route component={Error} />
      </Switch>
    </Layout>
  );
}
