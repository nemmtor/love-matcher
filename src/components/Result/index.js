import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import back from '../../assets/back.svg';
import fire from '../../assets/fire.svg';
import Loading from '../Loading';
import { BackButton, Names, ScoreContainer, Text } from './styles';
import ShowError from './ShowError';

const getNiceName = (name) => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

export default function Result({ location }) {
  const { name1, name2 } = queryString.parse(location.search);

  const history = useHistory();

  const routeToRoot = () => {
    history.push('/');
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://love-matcher-api.herokuapp.com/match?name1=${name1}&name2=${name2}`;
        const response = await fetch(url);
        if (response.status !== 200) throw new Error('error');
        const jsonResponse = await response.json();
        const { rating } = jsonResponse;
        setResult(rating);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name1, name2]);

  return (
    <>
      {isLoading && !isError && <Loading />}
      {isError && !isLoading && <ShowError handleClick={routeToRoot} />}
      {!isLoading && !isError && (
        <>
          <Names>
            {getNiceName(name1)} &amp; {getNiceName(name2)}
          </Names>
          <Text>Your match rating is</Text>
          <ScoreContainer>
            <img src={fire} alt="fire" />
            <Text>{`${result * 100}%`}</Text>
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
