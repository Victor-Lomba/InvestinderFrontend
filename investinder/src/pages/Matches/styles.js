import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
height: 100vh;
margin-top: 0px;
align-items: center;
place-content: center;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const LinkContainer = styled.div`
  margin-top: 10px;
  margin-left: 1300px;
  a {
    margin-left: 800px;
    margin-top: -20px;
    text-decoration: none;

    color: #b0a2ee;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#b0a2ee')}
    }
  }
`;

export const Logo = styled.img`
  animation: ${appearFromLeft} 1s;
  position: absolute;
  margin-top: -20px;
  z-index: 0;
  max-width: 350px;
  max-height: 350px;
  margin-bottom: 0;
  margin-right: 100px;
`;

export const ContainerCont = styled.div`
  margin-top: -100px;
`

export const Content = styled.div`
  animation: ${appearFromLeft} 1s;
  z-index: 0;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  place-content: center;
  background: #1f1f1f;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 200px;

  > div {
    margin-top: 1000px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-top: -50px;
    margin-right: 0px;
    margin-left: 400px;
    z-index: 1;
  }
  h1 {
    font-size: 18px;
    margin-right: 100px;
    margin-left: 10px;
    justify-content: center;
    align-self: center;
  }
  h1 + h1 {
    margin-right: 400px;
    margin-top: 50px;
    margin-left: -135px;
  }

  > div {
    margin-top: 100px;
  }
  margin-bottom: 30px;
`;


export const Background1 = styled.img`
  z-index: -1;
  overflow: hidden;
  height: 1000px;
  width: 1000px;
  top: -22rem;
  left: -33rem;
  position: absolute;
  animation: ${appearFromRight} 1s;
`;

export const Background2 = styled.img`
  position: absolute;
  animation: ${appearFromLeft} 1s;
  margin-bottom: -80rem;
  margin-top: 350px;
  right: -30rem;
  height: 900px;
  width: 900px;
  z-index: -1;
`;
