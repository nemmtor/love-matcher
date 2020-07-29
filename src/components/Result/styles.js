import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.dark2};
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isCounting ? 0 : 1)};
`;

export const Names = styled.p`
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.dark1};
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ResultImage = styled.img`
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.isCounting ? 0 : 1)};
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 3rem;

  img {
    height: 60px;
    margin-bottom: 0.4rem;
  }

  p {
    font-weight: bold;
    color: ${(props) => props.theme.colors.dark2};
    margin-top: 0.2rem;
  }
`;
