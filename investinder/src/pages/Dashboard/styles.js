import styled, { keyframes } from 'styled-components';


const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

const appearRightBut = keyframes`
  from {
    opacity: 0;
    transform: translateY(300px) translateX(100px) rotate(540deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0deg);
  }
`;

const appearLeftBut = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px) translateX(-100px) rotate(360deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0deg);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  place-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 1000px;
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromDown} 1s;

  display: flex;

  margin-top: -25px;

  flex-direction: column;
  align-items: center;


  border-radius: 16px;

  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 620px;
  background: #1f1f1f;

  img {
    border-radius: 50%;
    margin-top: 16px;
    width: 100%;
    max-width: 200px;
    height: 100%;
    max-height: 200px;
  }

  h1 {
    margin-top: 20px;
    margin-left: 8px;
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: #b0a2ee;
    margin-top: 36px;
    align-self: flex-start;
    margin-left: 70px;
  }
  h3 {
    align-self: flex-start;
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 5px;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .but1 {
    animation: ${appearLeftBut} 1s;
    background-color: #f4ede8;
    color: #b0a2ee;
    transition: transform 0.4s, background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #b0a2ee;
      color: #f4ede8;
      transform: translateY(-10px);
    }
  }

  .but2 {
    animation: ${appearRightBut} 1s;
    transition: transform 0.4s, background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #f4ede8;
      color: #b0a2ee;
      transform: translateY(-10px);
    }
  }

  > button {
    margin-top: 20px;
    margin-right: 75px;
    margin-left: 75px;
  }
`;

export const Logo = styled.img`
  animation: ${appearFromLeft} 1s;
  position: relative;
  margin-top: -80px;
  max-width: 350px;
  max-height: 350px;
  margin-bottom: 0;
  margin-right: 1100px;
`;

export const LButton = styled.button`
  height: 60px;
  cursor: pointer;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #b0a2ee;
  background: transparent;
  margin-left: 1200px;
  margin-top: -110px;
  transition: border-color 0.2s;
  color: #b0a2ee;

  &:hover {
    color: #c53030;
    border: 1px solid #c53030;
  }
`;
