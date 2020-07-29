import React, { useEffect, useState } from 'react';

import { angry, sad, happy, fire } from '../../assets';
import Loading from '../Loading';
import BackButton from '../BackButton';
import { Names, ScoreContainer, Text, ResultImage } from './styles';

const pickIndex = (rating) => {
  if (rating === 0) return 0;
  const whichQuarter = Math.ceil((rating * 100) / 25);
  const index = whichQuarter - 1;
  return index;
};

const Image = ({ src }) => {
  return <ResultImage src={src} alt="Result image" />;
};

export default function Result({ location, names, isLoading, result }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    const icons = [angry, sad, happy, fire];
    const chosenIcon = icons[pickIndex(result.rating)];
    setImage(chosenIcon);
  }, [result.rating]);

  const { name1, name2 } = names;

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Names>
            {name1} &amp; {name2}
          </Names>
          <Text>Your match rating is</Text>
          <ScoreContainer>
            <Image src={image} />
            <Text>{`${Math.ceil(result.rating * 100)}%`}</Text>
            <Text>{result.message}</Text>
          </ScoreContainer>
          <BackButton />
        </>
      )}
    </>
  );
}
