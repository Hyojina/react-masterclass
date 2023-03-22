import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

function App() {
  return (
    <>
      <Box bgColor="blue">
        <Text>Hello World!</Text>
      </Box>
      <Box bgColor="red" />
      <Circle bgColor="yellow" />
    </>
  );
}

export default App;
