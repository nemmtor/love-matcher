import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Loading from './Loading';

const Error = lazy(() => import('./Error'));
const Home = lazy(() => import('./Home'));
const Result = lazy(() => import('./Result'));

export default function App() {
  return (
    <Layout>
      <HashRouter>
        <Suspense fallback={<Loading animated={false} />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/result" component={Result} />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </HashRouter>
    </Layout>
  );
}
