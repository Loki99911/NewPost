import styled from 'styled-components';

export const AddrForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  color: #000000;
  margin-bottom: 20px;
`;

export const AddrLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
`;

export const AddrInput = styled.input`
  font-size: 16px;
  line-height: 26px;
  width: 250px;
  background-color: transparent;
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-radius: 5px;
  padding: 0 16px;
`;

export const AddrErrorText = styled.p`
  position: absolute;
  top: 50px;
  color: red;
`;
