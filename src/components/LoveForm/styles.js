import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  line-height: 1.4;
`;

export const LoveForm = styled.form`
  max-width: 250px;
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
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: #fff;
  bottom: 0;
  left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeartImg = styled.img`
  will-change: transform, filter;
  transition: transform 0.2s ease-in, filter 0.2s ease-out;
`;

export const LoveInputContainer = styled.div`
  position: relative;
  width: 70%;
  margin-top: 0.5rem;
`;

export const LoveFormInput = styled.input`
  background: transparent;
  border: none;
  display: flex;
  color: ${(props) => props.theme.colors.dark1};
  max-width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 0.5rem 2rem;
  transition: transform 0.3s ease;
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
