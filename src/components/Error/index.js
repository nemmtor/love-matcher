import React from 'react';

import BackButton from '../BackButton';
import Header from './styles';

export default function Error() {
  return (
    <>
      <Header>Oops! Something went wrong!</Header>
      <BackButton />
    </>
  );
}
