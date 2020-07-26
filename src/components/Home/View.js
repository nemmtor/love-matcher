import React from 'react';

import {
  FireImg,
  FormHeader,
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
      <FormHeader>LoveForm</FormHeader>
      <Text>Type in your name and name of your crush</Text>

      <LoveFormLabel htmlFor="name1">
        Your name
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
        Your crush name
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
      <LoveFormSubmit type="submit">
        <FireImg
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.6319 6.25273C12.6319 6.25273 11.8252 8.37297 10.2967 7.91445C9.02 7.53145 9.09324 5.79973 9.70723 4.37105C10.771 1.89563 7.73305 0 7.73305 0C7.73305 0 7.78055 2.51078 5.84945 3.46715C4.1948 4.28664 3.74074 6.07402 4.51191 7.40895C5.22695 8.64668 4.46859 9.39719 3.80266 9.66453C2.10859 10.3447 1.12273 8.24039 1.12273 8.24039C0.41 9.41141 0 10.7866 0 12.2575C0 16.5146 3.43566 19.9681 7.68551 19.9992C5.74234 19.9683 4.17031 18.3791 4.16848 16.4291C4.15953 15.6565 4.3448 14.832 4.71906 13.9784L4.92582 13.5068L5.97324 13.813C6.14129 12.9858 6.5652 12.2492 7.22191 11.6534C7.84117 11.0917 8.44535 10.8534 8.51223 10.8281L9.22543 10.558L9.30266 11.3168C9.3816 12.093 9.58215 12.7352 9.91562 13.2802C10.2147 13.7682 10.4922 14.1777 10.8166 14.6421C11.1433 15.1106 11.3214 15.7444 11.3184 16.4273C11.3181 17.3814 10.9462 18.2784 10.2712 18.9534C9.59633 19.6284 8.69855 20 7.74316 20C12.0196 20 15.4866 16.534 15.4866 12.2575C15.4866 9.83488 14.3737 7.67211 12.6319 6.25273Z" />
          <path d="M10.1465 16.4232C10.1486 15.9857 10.0426 15.581 9.85568 15.3129C9.56474 14.8964 9.24935 14.4358 8.91622 13.8923C8.62407 13.4149 8.41255 12.8885 8.27693 12.2982C7.74782 12.688 7.08599 13.4084 7.06368 14.5821L7.04911 15.3484L5.60493 14.9263C5.42341 15.4518 5.33454 15.9518 5.34028 16.4182L5.34032 16.4254C5.34083 17.7507 6.41868 18.8281 7.74314 18.8281C8.38548 18.8281 8.98904 18.5784 9.44255 18.1249C9.8965 17.6709 10.1465 17.0676 10.1465 16.4261V16.4232Z" />
        </FireImg>
        MATCH
      </LoveFormSubmit>
    </LoveForm>
  );
}
