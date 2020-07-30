import styled from 'styled-components';
import CountUp from 'react-countup';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Counter = styled(CountUp)`
  color: ${(props) => props.theme.colors.dark1};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.dark2};
`;

export const ResultMessage = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.dark2};
  transition: opacity 0.5s 0.2s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  margin-bottom: 1.5rem;
`;

export const Names = styled.p`
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.dark1};
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

export const ResultImage = styled.img`
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  margin-bottom: 1rem;
  height: 8rem;
`;
