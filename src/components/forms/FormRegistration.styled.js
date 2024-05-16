import styled from '@emotion/styled';
import { commonStylesBtn, commonStylesInput } from 'styles/CommonStyles';

export const FormRegist = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding-bottom: 10px;

  h2 {
    position: relative;
    font-size: 18px;
    text-align: center;
    color: rgb(218, 198, 0);
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  input {
    ${commonStylesInput}
  }
`;
export const ButtonSubmit = styled.button`
  ${commonStylesBtn}
  font-size: 14px;
  letter-spacing: 1px;
  height: 38px;
  display: block;

  &:hover,
  :focus {
    color: rgb(231, 210, 4);
    background-color: rgba(247, 248, 250, 0.5);
    transition: background-color 0.3s ease;
  }
`;

export const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
