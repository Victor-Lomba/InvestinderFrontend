import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

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
  max-width: 400px;
  height: 100%;
  max-height: 700px;

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

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  background: #1f1f1f;
  height: 100%;
  max-height: 600px;
  width: 450px;
  max-width: 600px;

  border-radius: 16px;

  animation: ${appearFromDown} 1s;

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
      color: #f4ede8;
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
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    margin-top: -10px;

    & + a {
      margin-top: 10px;
    }

    display: flex;
    align-items: center;

    svg {
      color: #b0a2ee;
      transition: color 0.2s;
    }

    span {
      font-weight: 600;
      margin-left: 4px;
      color: #b0a2ee;
      transition: color 0.2s;

      margin-right: 4px;
    }

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};

      span {
        color: ${shade(0.2, '#b0a2ee')};
      }

      svg {
        color: ${shade(0.2, '#b0a2ee')};
      }
    }
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
  animation: ${appearFromLeft} 1s;
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

export const H3 = styled.h3`
  animation: ${appearFromDown} 1s;
  font-size: 12px;
  justify-content: center;
  margin-top: 100px;
  margin-left: 250px;
`;


