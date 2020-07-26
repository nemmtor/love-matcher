import React from 'react';
import { useHistory } from 'react-router-dom';

import BackBtn from './styles';
import { goBackIcon } from '../../assets/index';

export default function BackButton({ text = 'Try again' }) {
  const history = useHistory();

  const routeToRoot = () => {
    history.push('/');
  };

  return (
    <BackBtn type="Button" onClick={routeToRoot}>
      <img src={goBackIcon} alt="Back" />
      {text}
    </BackBtn>
  );
}
