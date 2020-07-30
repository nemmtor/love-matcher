import styled from 'styled-components';
import CountUp from 'react-countup';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};

  p {
    text-align: center;
  }
`;

export const Names = styled.p`
  font-weight: bold;
  letter-spacing: 0.1em;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;

  span {
    color: ${(props) => props.theme.colors.contrast};
    font-size: 1.4em;
  }
`;

export const Counter = styled(CountUp)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ResultImage = styled.img`
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  margin-bottom: 1rem;
  height: 8rem;
`;

export const ResultMessage = styled.p`
  transition: opacity 0.5s 0.2s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  margin-bottom: 1.5rem;
`;
