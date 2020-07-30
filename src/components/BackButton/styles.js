import styled from 'styled-components';

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.light1};
  font-weight: bold;
  outline: none;
  border: none;
  background: ${(props) => props.theme.colors.pink};
  padding: 1rem 2.2rem;
  border-radius: 10px;
  cursor: pointer;
  will-change: filter;
  transition: filter 0.1s linear;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s 0.4s ease-in-out;
  will-change: opacity;

  &:hover,
  &:focus {
    filter: brightness(1.2);
  }

  img {
    margin-right: 0.5rem;
    path {
      fill: ${(props) => props.theme.colors.light1};
    }
  }
`;

export default BackBtn;
