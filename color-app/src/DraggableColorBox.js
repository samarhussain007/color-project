import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

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

  .boxContent {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .deleteIcon {
    transition: all 0.3s ease-in-out;
  }
`;

function DraggableColorBox(props) {
  const { handleClick, color, name } = props;

  return (
    <StyledDraggableColorBox style={{ background: color }}>
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon className="deleteIcon" onClick={handleClick} />
      </div>
    </StyledDraggableColorBox>
  );
}

export default SortableElement(DraggableColorBox);
