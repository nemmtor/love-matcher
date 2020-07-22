import React from 'react';

export default function ShowError({ handleClick }) {
  return (
    <>
      <p>Something went wrong, please try again</p>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </>
  );
}
