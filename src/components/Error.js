import React from 'react';
import styled from 'styled-components';

import { brokenHeart } from '../assets';
import BackButton from './BackButton';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const BrokenHeart = styled.img`
  height: 10rem;
`;

export default function Error() {
  return (
    <Container>
      <BrokenHeart src={brokenHeart} alt="Broken Heart" />
      <h2>Oops! Something went wrong!</h2>
      <BackButton />
    </Container>
  );
}
