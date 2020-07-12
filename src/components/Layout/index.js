import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  color: ${(props) => props.theme.colors.pink};
  text-align: center;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.colors.dark1};
  color: ${(props) => props.theme.colors.light2};
  padding: .5rem 0;
`;

export default function Layout({ children }) {
  return (
    <>
      <Title>
        <h1>LOVE MATCHER</h1>
      </Title>
      <main>{children}</main>
      <Footer>Made with ❤ by Kacper Witas</Footer>
    </>
  );
}
