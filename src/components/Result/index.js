import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import back from '../../assets/back.svg';
import fire from '../../assets/fire.svg';
import { BackButton, ScoreContainer, Text } from './styles';
import ShowError from './ShowError';

export default function Result({ location }) {
  const history = useHistory();

  const routeToRoot = () => {
    history.push('/');
  };

  const { name1, name2 } = queryString.parse(location.search);
  if (!name1 || !name2) return <ShowError handleClick={routeToRoot} />;

  return (
    <div>
      <Text>Your match rating is</Text>
      <ScoreContainer>
        <img src={fire} alt="fire" />
        <Text>89%</Text>
        <Text>You should get married!</Text>
      </ScoreContainer>
      <BackButton type="Button" onClick={routeToRoot}>
        <img src={back} alt="Back" />
        Check another one
      </BackButton>
    </div>
  );
}
