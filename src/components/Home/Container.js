import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import View from './View';

export default function Container() {
  const history = useHistory();

  const [inputValues, setInputValues] = useState({ name1: '', name2: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name1, name2 } = inputValues;
    history.push(`/result?name1=${name1}&name2=${name2}`);
  };

  return (
    <View
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
  );
}
