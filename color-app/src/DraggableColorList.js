import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          color={color.color}
          name={color.name}
          key={index}
          index={index}
          handleClick={() => deleteColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
