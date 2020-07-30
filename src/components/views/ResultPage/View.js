import React, { useState } from 'react';

import BackButton from '../../BackButton';
import {
  Names,
  ResultMessage,
  ResultImage,
  Counter,
  Container,
} from './styles';

export default function Result({ names, result }) {
  const [isCounting, setIsCounting] = useState(true);

  const { name1, name2 } = names;
  const { rating, message, icon } = result;

  return (
    <Container>
      <Names>
        {name1} <span>&amp;</span> {name2}
      </Names>
      <p>Your match rating is</p>
      <Counter
        end={rating}
        duration={2}
        decimals={2}
        delay={1}
        suffix="%"
        onEnd={() => setIsCounting(false)}
      />
      <ResultImage src={icon.src} alt={icon.alt} isVisible={!isCounting} />

      <ResultMessage isVisible={!isCounting}>{message}</ResultMessage>

      <BackButton isVisible={!isCounting} />
    </Container>
  );
}
