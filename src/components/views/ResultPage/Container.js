import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import Loading from '../../Loading';
import View from './View';
import { angry, sad, happy, fire } from '../../../assets';

const getProperIndex = (rating) => {
  if (rating === 0) return 0;
  const whichQuarter = Math.ceil((rating * 100) / 25);
  const index = whichQuarter - 1;
  return index;
};

const icons = [
  { src: angry, alt: 'Angry face' },
  { src: sad, alt: 'Sad face' },
  { src: happy, alt: 'Happy face' },
  { src: fire, alt: 'Fire' },
];

export default function Result({ location }) {
  const history = useHistory();
  const { name1, name2 } = queryString.parse(location.search);

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://love-matcher-api.herokuapp.com/match`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name1, name2 }),
        });

        if (response.status !== 200)
          throw new Error('Server responded with status other than 200');

        const jsonResponse = await response.json();
        const { rating, message } = jsonResponse;

        const icon = icons[getProperIndex(rating)];
        const displayRating = Math.floor(rating * 100);

        setResult({ rating: displayRating, message, icon });
        setIsLoading(false);
      } catch (error) {
        history.push('/error');
      }
    };
    fetchData();
  }, [name1, name2, history]);

  if (isLoading) return <Loading />;

  return (
    <View names={{ name1, name2 }} result={result} isLoading={isLoading} />
  );
}
