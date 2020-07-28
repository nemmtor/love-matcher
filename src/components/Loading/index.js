import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import heart from '../../assets/heart.svg';

const Pulse = keyframes`
0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const Text = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.pink};
`;

const PulsingHeart = styled.img`
  height: 150px;
  animation: ${(props) =>
    props.animated
      ? css`
          ${Pulse} 1s ease infinite
        `
      : ''};
`;

export default function Loading({ animated = true }) {
  return (
    <>
      <Text>Loading</Text>
      <PulsingHeart src={heart} animated={animated} />
    </>
  );
}
