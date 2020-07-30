import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import heart from '../../assets/heart.svg';

const Pulse = keyframes`
0% { transform: scale(0.8); }
  50% { transform: scale(1.3); }
  100% { transform: scale(0.8); }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.colors.pink};
  opacity: 0.8;
`;

const PulsingHeart = styled.img`
  height: 12rem;
  padding: 2rem;
  animation: ${(props) =>
    props.animated
      ? css`
          ${Pulse} 1s ease infinite
        `
      : ''};
`;

export default function Loading({ animated = true }) {
  return (
    <Container>
      <Text>Please wait</Text>
      <PulsingHeart src={heart} animated={animated} />
    </Container>
  );
}
