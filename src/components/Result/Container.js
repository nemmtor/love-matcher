import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import View from './View';

export default function Result({ location }) {
  const { name1, name2 } = queryString.parse(location.search);

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('');

  const history = useHistory();

  const handleError = () => {
    history.push('/error');
  };

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
        if (response.status !== 200) throw new Error('error');
        const jsonResponse = await response.json();
        const { rating, message } = jsonResponse;
        setResult({ rating, message });
        setIsLoading(false);
      } catch (error) {
        handleError();
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View name1={name1} name2={name2} result={result} isLoading={isLoading} />
  );
}
