import styled from 'styled-components';

const Header = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Header;