import styled from 'styled-components';

export const PackageForm = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

export const PackageInput = styled.input`
  font-size: 16px;
  line-height: 26px;
  background-color: transparent;
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-radius: 5px;
  width: 100%;
  padding: 0 16px;
  margin-right: 10px;
`;

export const PackageErrorText = styled.p`
position: absolute;
top: 30px;
  color: red;
`;