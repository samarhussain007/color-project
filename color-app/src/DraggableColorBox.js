import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import StyledDraggableColorBox from "./styles/StyledDraggableColorBox";
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
