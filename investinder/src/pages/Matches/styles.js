

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background:#1f1f1f;

  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 700px;
`;

export const Container = styled.div`



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