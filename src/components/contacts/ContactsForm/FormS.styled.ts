import styled from '@emotion/styled';
import {
  CommonStylesContainer,
  commonStylesBtn,
  commonStylesInput,
} from '../../../styles/CommonStyles';

const FormS = styled.form`
  ${CommonStylesContainer}

  input {
    ${commonStylesInput}
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-bottom: 10px;
  }

  button {
    ${commonStylesBtn}
    margin: auto;
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    height: 38px;
    display: block;
    width: 400px;

    &:hover,
    &:focus {
      color: rgb(231, 210, 4);
      background-color: rgba(247, 248, 250, 0.5);
      transition: background-color 0.3s ease;
    }
  }
`;

export default FormS;
