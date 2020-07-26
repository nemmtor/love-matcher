import styled from 'styled-components';

export const Main = styled.main`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
`;

export const Header = styled.header`
  font-family: Rubik;
  color: ${(props) => props.theme.colors.pink};
  text-align: right;
  letter-spacing: 2px;
  padding: 2rem 2rem 0 0;
  justify-self: flex-end;
  max-width: 60%;

  h1 {
    margin: 0;
  }
`;

export const Footer = styled.footer`
  font-family: Rubik;
  text-align: center;
  background: ${(props) => props.theme.colors.dark1};
  color: ${(props) => props.theme.colors.light2};
  padding: 0.5rem 0;
  width: 100%;
`;
