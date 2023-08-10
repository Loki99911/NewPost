import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const InfoPlate = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;
