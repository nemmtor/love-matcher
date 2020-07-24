import React from 'react';

import { goBackIcon, fireIcon } from '../../assets';
import Loading from '../Loading';
import { BackButton, Names, ScoreContainer, Text } from './styles';

const getNiceName = (name) => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

export default function Result({
  location,
  name1,
  name2,
  isLoading,
  routeToRoot,
  result,
}) {
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
            <img src={fireIcon} alt="fire" />
            <Text>{`${Math.ceil(result.rating * 100)}%`}</Text>
            <Text>{result.message}</Text>
          </ScoreContainer>
          <BackButton type="Button" onClick={routeToRoot}>
            <img src={goBackIcon} alt="Back" />
            Check another one
          </BackButton>
        </>
      )}
    </>
  );
}
