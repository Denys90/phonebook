import styled from '@emotion/styled';

export const SpynerStyled = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  background: transparent;
  border: solid #3c3c3c;
  margin: auto;
  bottom: -150px;
  border-radius: 50%;
  text-align: center;
  line-height: 110px;
  font-family: sans-serif;
  color: rgb(218, 198, 0);
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 20px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 5px solid rgb(218, 198, 0);
    border-right: 5px solid rgb(218, 198, 0);
    border-radius: 50%;
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;
