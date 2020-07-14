import React from 'react';

import { Content, Footer, Title } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Title>
        <h1>LOVE MATCHER</h1>
        <p>Find perfect partner!</p>
      </Title>
      <Content>{children}</Content>
      <Footer>Made with ❤ by Kacper Witas</Footer>
    </>
  );
}
