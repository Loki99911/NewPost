import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: #ff9900;
  color: #000000;
`;
export const HeaderTitle = styled.h1`
  font-family: 'Alata';
  font-weight: 600;
  font-size: 36px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition: all 250ms linear;

  &:hover,
  &.active {
    background-color: #cccccc;
    outline: 2px solid #ff9900;
    box-shadow: 2px 4px 9px 0px #ff9900;
  }
`;
