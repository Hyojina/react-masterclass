import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// 애니메이션을 keyframs로 만들고 그대로 사용할 수 있다.
const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  // component 안에서 element를 선택할 수 있다.
  span {
    font-size: 36px;
    // 부모 선택자 &로 간단하게 사용할 수 있다.
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
