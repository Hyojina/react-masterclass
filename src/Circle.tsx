import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [value, setValue] = useState<number | string>(0);
  setValue("hello");

  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-style: solid;
  border-radius: 50%;
  border-color: ${(props) => props.borderColor};
`;

export default Circle;
