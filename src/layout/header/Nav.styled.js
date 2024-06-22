import styled from '@emotion/styled';
import { commonStylesBtn } from 'styles/CommonStyles';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  height: 50px;
  background-color: rgba(186, 191, 196, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  border-radius: 0 0 12px 12px;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: 300;
  padding-left: 20px;
  color: rgb(218, 198, 0);
  margin-right: 400px;
`;
export const Contact = styled.span`
  font-weight: 400;
`;

export const StyledLink = styled(NavLink)`
  ${commonStylesBtn}
  margin-right: 200px;
  &:hover,
  &:focus {
    color: rgb(231, 210, 4);
    background-color: rgba(247, 248, 250, 0.5);
    transition: background-color 0.3s ease;
  }
  span {
    padding-left: 5px;
  }
`;

const span = 'nameWrapper';
export const Button = styled.button(
  {
    commonStylesBtn,
    display: 'flex',
    fontSize: 13,
    ':hover, :focus': {
      color: 'rgb(231, 210, 4)',
      backgroundColor: 'rgba(247, 248, 250, 0.5)',
      transition: 'background-color 0.3s ease',
    },
    [span]: {
      paddingLeft: 5,
    },
  },
  ({ isAuth }) => ({
    marginLeft: !isAuth ? 550 : 0,
  })
);

export const InformHome = styled.div`
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 20px;

  margin: auto;
  margin-top: 180px;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  h1 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(218, 198, 0);
    text-align: center;
  }
  p {
    line-height: 1.5;
    color: #fff;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: rgb(218, 198, 0);
    }
  }
`;

export const UserName = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  cursor: pointer;
  width: 245px;
  transform: 3s;
  &:hover {
    color: rgb(218, 198, 0);
  }
`;
