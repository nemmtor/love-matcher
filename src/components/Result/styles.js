import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.dark2};
`;

export const Names = styled.p`
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.dark1};
  margin-bottom: 1rem;
  font-size: 1.4rem;
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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.dark1};
  font-weight: bold;
  outline: none;
  border: none;
  background: ${(props) => props.theme.colors.light1};
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  will-change: transform;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5));
  }

  img {
    margin-right: 0.5rem;
  }
`;
