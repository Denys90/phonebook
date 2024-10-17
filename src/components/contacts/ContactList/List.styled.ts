import styled from '@emotion/styled';
import { CommonStylesContainer } from '../../../styles/CommonStyles';

const List = styled.ul`
  ${CommonStylesContainer}

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    margin-right: 10px;
    color: #fff;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
  }
  button:hover {
    color: rgb(177, 41, 8);
  }
`;

export default List;
