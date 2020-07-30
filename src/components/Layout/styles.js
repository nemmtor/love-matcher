import styled from 'styled-components';

export const Header = styled.header`
  font-family: Rubik;
  color: ${(props) => props.theme.colors.contrast};
  text-align: right;
  padding: 1rem 2rem;
  width: 100%;
  justify-self: flex-end;
  overflow: auto;
  background-image: url('/couple.png');
  background-repeat: no-repeat;
  background-size: auto 8rem;
  background-position: top 1rem left 1rem;
  min-height: 9rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  div {
    max-width: 60%;
  }

  h1 {
    margin: 0;
    letter-spacing: -0.01em;
    line-height: 1;
    font-weight: 400;
  }
  p {
    filter: saturate(40%);
    letter-spacing: 0.02em;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  &::after {
    content: '';
    height: 150px;
    width: 150px;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${(props) => props.theme.colors.contrast};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  font-family: Rubik;
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.main};
  padding: 0.5rem 0;
  width: 100%;
`;
