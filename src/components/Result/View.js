import React from 'react';
import { useImage } from 'react-image';

import { fireIcon } from '../../assets';
import Loading from '../Loading';
import BackButton from '../BackButton';
import { Names, ScoreContainer, Text } from './styles';

const getNiceName = (name) => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

const FireImage = () => {
  const { src } = useImage({ srcList: fireIcon });
  return <img src={src} alt="fire" />;
};

export default function Result({ location, name1, name2, isLoading, result }) {
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Names>
            {getNiceName(name1)} &amp; {getNiceName(name2)}
          </Names>
          <Text>Your match rating is</Text>
          <ScoreContainer>
            <FireImage />
            <Text>{`${Math.ceil(result.rating * 100)}%`}</Text>
            <Text>{result.message}</Text>
          </ScoreContainer>
          <BackButton />
        </>
      )}
    </>
  );
}
