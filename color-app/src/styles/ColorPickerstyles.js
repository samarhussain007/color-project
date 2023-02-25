import react from "react";
import { styled } from "@mui/material/styles";

const StyledColorPicker = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 1rem;
  .picker {
    width: 100% !important;
    margin-top: 2rem;
  }
  .form-color-name {
    width: 100%;
    margin-top: 1rem;
  }

  .add-color {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .color-name-input {
    width: 100%;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export default StyledColorPicker;
