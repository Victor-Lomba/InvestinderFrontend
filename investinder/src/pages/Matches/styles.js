import styled, { keyframes } from 'styled-components';

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
justify-content: center;
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

export const Content = styled.div`
  display: flex;
  align-self: center;
  border-radius: 16px;
  justify-content: center;
  background: #1f1f1f;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 200px;
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
