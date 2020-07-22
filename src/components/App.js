import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from './Error';
import Layout from './Layout';
import LoveForm from './LoveForm';
import Result from './Result';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={LoveForm} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/result`}
          component={Result}
        />
        <Route component={Error} />
      </Switch>
    </Layout>
  );
}
