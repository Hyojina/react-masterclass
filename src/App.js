import styled from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  border-radius: 15px;
  background-color: tomato;
  border: none;
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "와우",
  minLength: 10,
})`
  background-color: teal;
  ::placeholder {
    color: gold;
  }
`;

function App() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
