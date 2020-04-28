import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  align-items: center;
  place-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-top: 50px;
  margin-left: 50px;

  width: 100%;
  max-width: 1500px;
  height: 100%;
  max-height: 4000px;
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

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #1f1f1f;
  width: 100%;
  max-width: 500px;
  height: 1000px;

  margin-top: 300px;

  border-radius: 16px;

  animation: ${appearFromRight} 1s;

  form {
    display: block;
    block-size: 30px;
    margin-top: 50px;

    background: #1f1f1f;
    width: 1000px;
    height: 1000px;
    border-radius: 16px;

    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 12px;
      margin: 10px;
      margin-top: 24px;
    }

    button {
      margin-top: 30px;
      margin-bottom: -30px;
    }

    input {
      display: flex;
      flex-direction: row;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: -24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;
export const Background = styled.div`
  position: relative;

  img {
    max-width: 500px;
    max-height: 500px;
    margin-top: -500px;
    margin-bottom: 0;
    top: -15rem;
    left: -21rem;
    margin-left: 100px;
  }

  > a {
    color: #b0a2ee;
    display: block;
    margin-top: 0;
    text-decoration: none;
    transition: color 0.2s;
    margin-left: 250px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${shade(0.2, '#b0a2ee')};
    }
  }
`;
