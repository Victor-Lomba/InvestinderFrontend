import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

export const NEXT = "NEXT";
export const PREV = "PREV";

const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
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

const swipeRight = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(150px);
  }
`;

const swipeLeft = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(-150px);
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

  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 1000px;
  margin-bottom: -50px;
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromDown} 1.5s;

  ${(props) =>
    props.isLiked &&
    css`
      animation: ${swipeRight} 1s;
    `}

    ${(props) =>
    props.isDisliked &&
    css`
      animation: ${swipeLeft} 1s;
    `}

  display: flex;

  margin-top: 30px;

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
  position: absolute;
  margin-top: 550px;

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
  margin-top: -60px;
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
  transition: 0.2s;
  color: #b0a2ee;

  &:hover {
    color: #c53030;
    border: 1px solid #c53030;
  }
`;

export const Background = styled.img`
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
  margin-bottom: -80rem;
  margin-top: 150px;
  right: -30rem;
  height: 900px;
  width: 900px;
  z-index: -1;
  animation: ${appearFromRight} 1s;
`;

export const FormCont = styled.div`
  margin-top: -60px;
  margin-bottom: 15px;
`;

