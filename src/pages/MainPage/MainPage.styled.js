import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const InfoPlate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
`;
