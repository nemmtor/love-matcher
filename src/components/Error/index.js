import React from 'react';
import styled from 'styled-components';

import { brokenHeart } from '../../assets';
import BackButton from '../BackButton';
import Header from './styles';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Error() {
  return (
    <Container>
      <img src={brokenHeart} alt="Broken Heart" />
      <Header>Oops! Something went wrong!</Header>
      <BackButton />
    </Container>
  );
}
