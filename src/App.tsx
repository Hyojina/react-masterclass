import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setInputValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("hello", inputValue);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default App;
