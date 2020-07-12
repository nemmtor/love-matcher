import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout';
import Landing from './Landing';
import Result from './Result';

export default function App() {
  return (
    <Layout>
      <Route exact path="/" component={Landing} />
      <Route path="/result" component={Result} />
    </Layout>
  );
}
