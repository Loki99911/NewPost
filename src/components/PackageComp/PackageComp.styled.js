import styled from 'styled-components';

export const PackegeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background-color: #ff9900;
  color: #ffffff;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    min-width: 500px;
  }
`;

export const PackegeText = styled.p`
  font-weight: 400;
  background-color: #ff9900;
`;

export const PackegeAccentText = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
