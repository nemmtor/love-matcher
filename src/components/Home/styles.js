import styled from 'styled-components';

export const FormHeader = styled.h2`
  color: ${(props) => props.theme.colors.pink};
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
  padding: 2rem 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.dark1};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5), 0px 3px 2px rgba(0, 0, 0, 0.5);
`;

export const LoveFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  font-weight: bold;
`;

export const HeartImgContainer = styled.div`
  position: absolute;
  width: 52px;
  border-radius: 50%;
  background: #fff;
  bottom: -1px;
  top: -1px;
  left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeartImg = styled.img`
  will-change: transform, filter;
  transition: transform 0.2s ease-in, filter 0.2s ease-out;
`;

export const LoveInputContainer = styled.div`
  position: relative;
  width: 70%;
  margin-top: 0.5rem;
  z-index: 1;
  &::before {
    bottom: 0;
    left: 0;
    position: absolute;
    content: '';
    background: #fff;
    height: 2px;
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
  padding: 1rem 2rem;
  transition: transform 0.3s ease;
  z-index: 100;
  text-align: center;
  &:focus ~ ${HeartImgContainer} ${HeartImg} {
    transform: scale(1.2);
    filter: brightness(0.9);
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
  will-change: color;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.pink};
    transform: translateY(-3px);
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