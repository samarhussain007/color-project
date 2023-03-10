import { styled } from "@mui/material";
import sizes from "./sizes";

const StyledNavbar = styled("header")(
  () => `

  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;


.logo {
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  font-family: Roboto;
  height: 100%;
  display: flex;
  align-items: center;

  ${sizes.down("xs")}{
    display: none;
  }
}

.logo a {
  text-decoration: none;
  color: black;
}

.slider {
  width: 340px !important;
  margin: 0 10px !important;
  display: inline-block !important;
}

.rc-slider-track {
  background-color: transparent !important;
}

.rc-slider-rail {
  height: 8px !important;
}

.rc-slider-handle,
.rc-slider-handle:active,
.rc-slider-handle:focus,
.rc-slider-handle:hover {
  background-color: green !important;
  outline: none !important;
  border: 2px solid green !important;
  box-shadow: none !important;
  width: 13px !important;
  height: 13px !important;
  margin-left: -7px !important;
  margin-top: -3px !important;
}

${sizes.down("md")}{
  .slider {
    width: 150px !important;
  }
}



.select-container {
  margin-left: auto;
}`
);

export default StyledNavbar;
