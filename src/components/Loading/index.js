import React from 'react';
import styled, { keyframes } from 'styled-components';

import heart from '../../assets/heart.svg';

const Pulse = keyframes`
0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const PulsingHeart = styled.img`
  height: 150px;
  animation: ${Pulse} 1s ease infinite;
`;

export default function Loading() {
  return (
    <>
      <Text>Please wait... We are checking your match rating</Text>
      <PulsingHeart src={heart} />
    </>
  );
}
