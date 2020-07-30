import React, { useEffect, useState } from 'react';

import { angry, sad, happy, fire } from '../../assets';
import Loading from '../Loading';
import BackButton from '../BackButton';
import {
  Names,
  Text,
  ResultImage,
  ResultMessage,
  Counter,
  Container,
} from './styles';

const pickIndex = (rating) => {
  if (rating === 0) return 0;
  const whichQuarter = Math.ceil((rating * 100) / 25);
  const index = whichQuarter - 1;
  return index;
};

export default function Result({ location, names, isLoading, result }) {
  const [image, setImage] = useState('');
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const icons = [angry, sad, happy, fire];
    const chosenIcon = icons[pickIndex(result.rating)];
    setImage(chosenIcon);
  }, [result.rating]);

  const { name1, name2 } = names;
  const displayRating = Math.ceil(result.rating * 100);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Names>
            {name1} <span>&amp;</span> {name2}
          </Names>
          <Text>Your match rating is</Text>
          <Counter
            end={displayRating}
            duration={2}
            decimals={2}
            delay={1}
            suffix="%"
            onEnd={() => setIsCounting(false)}
          />
          <ResultImage src={image} isVisible={!isCounting} alt="Result image" />

          <ResultMessage isVisible={!isCounting}>
            {result.message}
          </ResultMessage>
          <BackButton isVisible={!isCounting} />
        </Container>
      )}
    </>
  );
}
