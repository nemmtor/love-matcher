import styled from 'styled-components';

export const Subtitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.dark1};
`;

export const Text = styled.p`
  text-align: center;
`;

export const LoveForm = styled.form`
  max-width: 250px;
  background: ${(props) => props.theme.colors.light1};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.dark1};
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
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
`;

export const LoveInputContainer = styled.div`
  position: relative;
  width: 80%;
  margin-top: 0.5rem;
`;

export const LoveFormInput = styled.input`
  background: transparent;
  border: none;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 0.5rem 2rem;
  &:focus ~ ${HeartImgContainer} ${HeartImg} {
    transform: scale(1.4);
    filter: brightness(1.1);
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
`;

export const FireImg = styled.img`
  margin-right: 0.5rem;
`;
