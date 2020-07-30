import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './ErrorBoundary';
import Layout from './Layout';
import Loading from './Loading';

const Error = lazy(() => import('./Error'));
const Home = lazy(() => import('./Home'));
const Result = lazy(() => import('./Result'));

const theme = {
  colors: {
    main: '#F5CCE8',
    contrast: '#E01A4F',
    secondary: '#44001A',
  },
};

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HashRouter>
          <Suspense fallback={<Loading animated={false} />}>
            <ErrorBoundary key={location.pathname}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/result" component={Result} />
                <Route component={Error} />
              </Switch>
            </ErrorBoundary>
          </Suspense>
        </HashRouter>
      </Layout>
    </ThemeProvider>
  );
}
