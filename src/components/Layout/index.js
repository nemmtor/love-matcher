import React from 'react';

import { Main, Footer, Header } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <div>
          <h1>LOVE MATCHER</h1>
          <p>Find your crush</p>
        </div>
      </Header>
      <Main>{children}</Main>
      <Footer>Made with ❤ by Kacper Witas</Footer>
    </>
  );
}
