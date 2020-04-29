import styled from 'styled-components';

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
  display: flex;

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

  > button {
    margin-top: 20px;
    margin-right: 50px;
    margin-left: 50px;
  }
`;
