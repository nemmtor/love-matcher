import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import back from '../../assets/back.svg';
import fire from '../../assets/fire.svg';
import Loading from '../Loading';
import { BackButton, Names, ScoreContainer, Text } from './styles';
import ShowError from './ShowError';

export default function Result({ location }) {
  const history = useHistory();

  const routeToRoot = () => {
    history.push('/');
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { name1, name2 } = queryString.parse(location.search);
  if (!name1 || !name2) return <ShowError handleClick={routeToRoot} />;

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Names>
            {`${name1[0].toUpperCase() + name1.substring(1).toLowerCase()}
             &
            ${name2[0].toUpperCase() + name2.substring(1).toLowerCase()}`}
          </Names>
          <Text>Your match rating is</Text>
          <ScoreContainer>
            <img src={fire} alt="fire" />
            <Text>100%</Text>
            <Text>You should get married!</Text>
          </ScoreContainer>
          <BackButton type="Button" onClick={routeToRoot}>
            <img src={back} alt="Back" />
            Check another one
          </BackButton>
        </>
      )}
    </>
  );
}
