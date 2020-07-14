import React from 'react';

import {
  FireImg,
  HeartImg,
  HeartImgContainer,
  LoveForm,
  LoveFormLabel,
  LoveFormInput,
  LoveInputContainer,
  LoveFormSubmit,
  Subtitle,
  Text,
} from './styles';

import heart from '../../assets/heart.svg';
import fire from '../../assets/fire.svg';

export default function Landing() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name1 = e.target.name1.value;
    const name2 = e.target.name2.value;
    console.log(name1, name2);
  };
  return (
    <>
      <Subtitle>Check if you match each other</Subtitle>
      <LoveForm onSubmit={handleSubmit}>
        <Text>Type in your name and name of your crush</Text>

        <LoveFormLabel htmlFor="name1">
          Your name
          <LoveInputContainer>
            <LoveFormInput type="text" id="name1" name="name1" />
            <HeartImgContainer>
              <HeartImg src={heart} alt="Heart" />
            </HeartImgContainer>
          </LoveInputContainer>
        </LoveFormLabel>

        <LoveFormLabel htmlFor="name2">
          Your crush name
          <LoveInputContainer>
            <LoveFormInput type="text" id="name2" name="name2" />
            <HeartImgContainer>
              <HeartImg src={heart} alt="Heart" />
            </HeartImgContainer>
          </LoveInputContainer>
        </LoveFormLabel>
        <LoveFormSubmit type="submit">
          <FireImg src={fire} />
          MATCH
        </LoveFormSubmit>
      </LoveForm>
    </>
  );
}
