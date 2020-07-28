import React from 'react';
import { useImage } from 'react-image';
import { useHistory } from 'react-router-dom';

import BackBtn from './styles';
import { goBackIcon } from '../../assets/index';

const GoBackIcon = () => {
  const { src } = useImage({ srcList: goBackIcon });
  return <img src={src} alt="Go back" />;
};

export default function BackButton({ text = 'Try again' }, ref) {
  const history = useHistory();

  const routeToRoot = () => {
    history.push('/');
  };

  return (
    <BackBtn type="Button" onClick={routeToRoot}>
      <GoBackIcon />
      {text}
    </BackBtn>
  );
}
