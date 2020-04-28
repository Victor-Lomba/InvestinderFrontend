import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  overflow: hidden;

  display: flex;
  align-items: center;
  place-content: center;
  justify-content: center;

  > img {
    position: absolute;
    margin-bottom: -80rem;
    right:-60rem;

    overflow: hidden;
    z-index: -1;
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 700px;

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

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: #1f1f1f;
  height: 100%;
  max-height: 600px;
  width: 100%;
  max-width: 400px;

  border-radius: 16px;

  animation: ${appearFromLeft} 1s;

  img {
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 0;
  }

  form {
    margin: 80px 0;
    margin-top: 0;
    width: 340px;
    text-align: center;
    margin-bottom: 24px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #b0a2ee;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#b0a2ee')};
    }
  }
`;

export const Background = styled.img`
  overflow: hidden;
  top: 7rem;
  left: -13rem;
  z-index: -1;
  position: absolute;
`;
