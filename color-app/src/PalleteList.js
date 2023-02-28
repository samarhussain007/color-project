import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MiniPallete from "./MiniPalette";
import StyledPaletteList from "./styles/PaletteList";
import { Button } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

const PalleteList = ({ palettes, deletePalette, resetPallete }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/palette/${id}`);
  };
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [deleteId, setDeleteId] = useState("");

  const handleDelete = (id) => {
    deletePalette(deleteId);
    closeDialog();
  };

  const openDialog = (id) => {
    setOpenDeleteDialog(true);
    setDeleteId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteId("");
  };

  return (
    <StyledPaletteList>
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {" "}
            <Link to="/palette/new">Create Palette</Link>
            <Button color="error" variant="contained" onClick={resetPallete}>
              RESET
            </Button>
          </div>
        </nav>

        <TransitionGroup className="palettes">
          {palettes.map((palette) => {
            return (
              <CSSTransition key={palette.id} classNames="item" timeout={500}>
                <MiniPallete
                  {...palette}
                  handleClick={handleClick}
                  deletePalette={deletePalette}
                  openDialog={openDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClick={closeDialog}
      >
        <DialogTitle id="alert-dialog-title">Delete this palette?</DialogTitle>
        <List>
          <ListItemButton onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItemButton>
          <ListItemButton onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Close" />
          </ListItemButton>
        </List>
      </Dialog>
    </StyledPaletteList>
  );
};

export default PalleteList;
