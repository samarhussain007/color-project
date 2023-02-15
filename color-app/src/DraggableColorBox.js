import React from "react";
import styled from "styled-components";

const StyledDraggableColorBox = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -3.5px;
  &:hover svg {
    color: white;
    transform: scale(1.5);
  }
`;

export default function DraggableColorBox(props) {
  return (
    <StyledDraggableColorBox style={{ background: props.color }}>
      {props.color}
    </StyledDraggableColorBox>
  );
}
