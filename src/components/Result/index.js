import React from 'react';
import queryString from 'query-string';

export default function Result({ location }) {
  const { name1, name2 } = queryString.parse(location.search);
  if (!name1 || !name2) return <p>Prease provide proper names!</p>;
  return (
    <>
      <h1>Result</h1>
      <p>{name1}</p>
      <p>{name2}</p>
    </>
  );
}
