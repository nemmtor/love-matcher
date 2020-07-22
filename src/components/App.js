import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Error from './Error';
import Layout from './Layout';
import LoveForm from './LoveForm';
import Result from './Result';

export default function App() {
  return (
    <Layout>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoveForm} />
          <Route exact path="/result" component={Result} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </Layout>
  );
}
