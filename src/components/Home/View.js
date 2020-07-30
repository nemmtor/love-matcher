import React from 'react';

import {
  HeartImg,
  HeartImgContainer,
  LoveForm,
  LoveFormLabel,
  LoveFormInput,
  LoveInputContainer,
  LoveFormSubmit,
  Text,
} from './styles';

import heart from '../../assets/heart.svg';

export default function View({
  handleChange,
  handleSubmit,
  inputValues,
  setInputValues,
}) {
  // TODO: Write own hook which will handle both focus nad blur
  const handleFocus = (e) => {
    const parent = e.target.parentElement;
    parent.classList.add('focused');
  };

  const handleBlur = (e) => {
    const parent = e.target.parentElement;
    parent.classList.remove('focused');
  };

  return (
    <LoveForm onSubmit={handleSubmit}>
      <Text>Type in your name and name of your crush</Text>

      <LoveFormLabel htmlFor="name1">
        <span>Name</span>
        <LoveInputContainer>
          <LoveFormInput
            type="text"
            id="name1"
            name="name1"
            autoComplete="off"
            value={inputValues.name1}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
      </LoveFormLabel>

      <LoveFormLabel htmlFor="name2">
        <span>Crush name</span>
        <LoveInputContainer>
          <LoveFormInput
            type="text"
            id="name2"
            name="name2"
            autoComplete="off"
            value={inputValues.name2}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
      </LoveFormLabel>
      <LoveFormSubmit type="submit">Check rating</LoveFormSubmit>
    </LoveForm>
  );
}
