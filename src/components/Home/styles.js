import styled from 'styled-components';

export const FormHeader = styled.h2`
  color: ${(props) => props.theme.colors.pink};
  line-height: 1;
`;

export const Text = styled.p`
  text-align: center;
  line-height: 1.4;
`;

export const LoveForm = styled.form`
  max-width: 400px;
  width: 100%;
  background: ${(props) => props.theme.colors.light1};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.dark1};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5), 0px 3px 2px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: 'fade-in-slide' 0.3s ease-in forwards;
`;

export const LoveFormLabel = styled.label`
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 0 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

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
  cursor: pointer;
  transition: filter 0.2s linear;
`;

export const HeartImg = styled.img`
  will-change: transform, filter;
  transition: transform 0.2s ease-in, filter 0.2s ease-out;
  transform: scale(0);
  animation: 'zoom-in' 0.2s 0.2s linear forwards;
`;

export const LoveInputContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
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
    &::before {
      transform: scaleX(0);
    }
    &::after {
      transform: translateY(50%) scaleX(1);
    }
  }
`;

export const LoveFormInput = styled.input`
  background: transparent;
  border: none;
  display: flex;
  color: ${(props) => props.theme.colors.dark1};
  max-width: 100%;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 1rem 0 1rem 3rem;
  transition: transform 0.3s ease;
  z-index: 100;
  &:focus ~ ${HeartImgContainer} {
    filter: drop-shadow(4px 0px 0px #f5cce8);
  }
  &:focus ~ ${HeartImgContainer} ${HeartImg} {
    filter: brightness(1.3);
  }
`;

export const LoveFormSubmit = styled.button`
  background: ${(props) => props.theme.colors.light2};
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 2.5rem;
  color: ${(props) => props.theme.colors.dark1};
  cursor: pointer;
  will-change: color, transform, filter;
  transition: color 0.2s linear, transform 0.2s linear, filter 0.2s linear;
  filter: drop-shadow(0 2px 0 #e01a4f);

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.pink};
    transform: translateY(2px);
    filter: none;
    path {
      fill: ${(props) => props.theme.colors.pink};
    }
  }
`;

export const FireImg = styled.svg`
  margin-right: 0.5rem;
  width: 16px;
  height: 20px;
  path {
    fill: #44001a;
    will-change: fill;
    transition: fill 0.3s ease;
  }
`;
