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
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /[a-zA-Z]+/,
            })}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
        <ErrorMessage>
          {errors.name1?.type === 'required' && 'This field is required'}
          {errors.name1?.type === 'minLength' &&
            'Name is too short (min 3 characters)'}
          {errors.name1?.type === 'maxLength' &&
            'Name is too long (max 20 characters)'}
          {errors.name1?.type === 'pattern' && 'Please use only letter'}
        </ErrorMessage>
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
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /[a-zA-Z]+/,
            })}
          />
          <HeartImgContainer>
            <HeartImg src={heart} alt="Heart" />
          </HeartImgContainer>
        </LoveInputContainer>
        <ErrorMessage>
          {errors.name2?.type === 'required' && 'This field is required'}
          {errors.name2?.type === 'minLength' &&
            'Name is too short (min 3 characters)'}
          {errors.name2?.type === 'maxLength' &&
            'Name is too long (max 20 characters)'}
          {errors.name2?.type === 'pattern' && 'Please use only letter'}
        </ErrorMessage>
      </LoveFormLabel>
      <LoveFormSubmit type="submit">Check rating</LoveFormSubmit>
    </LoveForm>
  );
}
