import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  // 컴포넌트 직접 타겟팅
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
