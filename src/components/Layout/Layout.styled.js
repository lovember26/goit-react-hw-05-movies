import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  align-items: center;
  background-color: #1d3557;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: #fff;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: #457b9d;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #e63946;
  }

  &.active {
    background-color: #e63946;
  }
`;
