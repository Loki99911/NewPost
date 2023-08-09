import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #ff9900;
  color: #000000;
  margin-bottom: 30px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  text-decoration: none;
  background-color: #eeeeee;
  color: #000000;
  padding: 15px;
  min-width: 150px;
  outline: 1px solid #000000;
  border-radius: 5px;

  &:hover,
  &.active {
    background-color: #cccccc;
    outline: 2px solid #ff9900;
  }
`;
