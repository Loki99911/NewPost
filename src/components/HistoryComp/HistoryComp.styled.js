import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
`;

export const HistoryTitle = styled.h2`
  font-weight: 600;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: scroll;
`;

export const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const HistorySelectBtn = styled.button`
  background-color: transparent;
  border: none;
  transition: background-color 350ms linear;
  cursor: pointer;
  &:hover {
    background-color: #ff9900;
    border-radius: 5px;
  }
`;

