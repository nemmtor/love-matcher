import styled from 'styled-components';

export const HeartImgContainer = styled.div`
  position: absolute;
  width: 52px;
  border-radius: 50%;
  background: #fff;
  bottom: -2px;
  top: -2px;
  left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 2px ${(props) => props.theme.colors.contrast};
  cursor: pointer;
  transition: filter 0.2s linear;

  img {
    will-change: transform, filter;
    transition: transform 0.2s ease-in, filter 0.2s ease-out;
    transform: scale(0);
    animation: 'zoom-in' 0.2s 0.4s linear forwards;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0;
  animation: 'fade-in-slide' 0.3s ease-in forwards;

  p {
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 2rem;
    width: 100%;
    position: relative;
  }

  span {
    opacity: 0.8;
    padding-left: 1.5rem;
    font-size: 0.8rem;
  }

  button {
    border: none;
    background: transparent;
    padding: 1rem 2.2rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.contrast};
    cursor: pointer;
    will-change: filter;
    transition: filter 0.2s linear;
    filter: brightness(110%);
    text-transform: uppercase;
    letter-spacing: 0.1em;

    &:hover,
    &:focus {
      filter: brightness(120%);
      box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  z-index: 1;
  &::before {
    bottom: 0;
    left: 0;
    position: absolute;
    content: '';
    background: #fff;
    height: 1px;
    width: 100%;
    will-change: transform;
    transition: transform 0.2s linear;
  }
  &::after {
    bottom: 50%;
    left: 0;
    position: absolute;
    content: '';
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translateY(50%) scaleX(0);
    will-change: transform;
    transition: transform 0.2s linear;
    transform-origin: left;
    border-radius: 0 20px 20px 0;
  }

  &.focused {
    border-radius: 20px;
    &::before {
      transform: scaleX(0);
    }
    &::after {
      transform: translateY(50%) scaleX(1);
    }
  }

  input {
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    outline: none;
    padding: 1rem 0 1rem 3rem;
    transition: transform 0.3s ease;
    &:focus ~ ${HeartImgContainer} {
      filter: drop-shadow(4px 0px 0px #f5cce8);
    }
    &:focus ~ ${HeartImgContainer} img {
      filter: brightness(1.3);
    }
  }
`;

export const Error = styled.span`
  will-change: opacity;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.hasError ? 1 : 0)};
  color: tomato;
  animation: 'fade-in' 1s ease forwards;
  position: absolute;
`;
