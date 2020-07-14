import styled from 'styled-components';

export const Content = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.header`
  font-family: Rubik;
  color: ${(props) => props.theme.colors.pink};
  text-align: center;
`;

export const Footer = styled.footer`
  font-family: Rubik;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.colors.dark1};
  color: ${(props) => props.theme.colors.light2};
  padding: 0.5rem 0;
`;
