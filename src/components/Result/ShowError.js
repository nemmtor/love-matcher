import React from 'react';

export default function ShowError({ handleClick }) {
  return (
    <>
      <p>Please provide valid names!</p>
      <button type="button" onClick={handleClick}>Go back</button>
    </>
  );
}
