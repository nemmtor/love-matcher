import React from 'react';
import { useHistory } from 'react-router-dom';

import View from './View';

export default function Container() {
  const history = useHistory();

  const onSubmit = ({ name1, name2 }) => {
    history.push(`/result?name1=${name1}&name2=${name2}`);
  };

  return <View onSubmit={onSubmit} />;
}
