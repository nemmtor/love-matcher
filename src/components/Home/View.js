import React from 'react';
import { useForm } from 'react-hook-form';

import {
  ErrorMessage,
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
  onSubmit,
  inputValues,
  setInputValues,
}) {
  const { register, handleSubmit, errors } = useForm();

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
    <LoveForm onSubmit={handleSubmit(onSubmit)}>
      <Text>Type in your name and name of your crush</Text>

      <LoveFormLabel htmlFor="name1">
        <span>Name</span>
        <LoveInputContainer>
          <LoveFormInput
            type="text"
            id="name1"
            name="name1"
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={register({ required: true })}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
        {errors.name1 && <ErrorMessage>Error</ErrorMessage>}
      </LoveFormLabel>

      <LoveFormLabel htmlFor="name2">
        <span>Crush name</span>
        <LoveInputContainer>
          <LoveFormInput
            type="text"
            id="name2"
            name="name2"
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={register({ required: true })}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
        {errors.name2 && <ErrorMessage>Error</ErrorMessage>}
      </LoveFormLabel>
      <LoveFormSubmit type="submit">Check rating</LoveFormSubmit>
    </LoveForm>
  );
}
