import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './ErrorBoundary';
import Layout from './Layout';
import Loading from './Loading';

const Error = lazy(() => import('./Error'));
const HomePage = lazy(() => import('./views/HomePage'));
const ResultPage = lazy(() => import('./views/ResultPage'));

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
        <Suspense fallback={<Loading animated={false} />}>
          <ErrorBoundary key={location.pathname}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/result" component={ResultPage} />
              <Route component={Error} />
            </Switch>
          </ErrorBoundary>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}
