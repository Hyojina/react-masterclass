import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

interface CircleProps {
  bgColor: string;
}

const Circle = (props: CircleProps) => {
  return <Container bgColor={props.bgColor} />;
};

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

export default Circle;
