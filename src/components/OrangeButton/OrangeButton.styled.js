import styled from 'styled-components';
export const StyledBtn = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #ff9900;
  color: #000000;
  padding: 5px;
  border: none;
  outline: 1px solid #000000;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition: all 250ms linear;

  &:hover,
  &.active {
    background-color: #cccccc;
    outline: 2px solid #ff9900;
    box-shadow: 2px 4px 9px 0px #ff9900;
  }
`;
