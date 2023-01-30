import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { hexToRgb } from "@mui/material";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.handleChange(this.state.format);
    });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reatcolorPicker</a>
        </div>
        <div className="slider-container">
          <span>{`Level:${level}`}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">#ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,0.1)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            message={<span id="message-id">Format Changed</span>}
            ContentProps={{
              "aria-describeby": "message-id",
            }}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </header>
    );
  }
}
export default Navbar;
