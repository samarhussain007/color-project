import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import FormDialog from "./PaletteMetaForm";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  ({ theme, open }) => (
    {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
    `
  .nav-btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
  .nav-btns button {
    margin: 0 0.5rem;
  }
  
`
  )
);
const drawerWidth = 400;

const PaletteFormNav = (props) => {
  const { open } = props;
  const [newPalleteName, setNewPalleteName] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [props.palettes]);

  const handleNewPalleteNameChange = (e) => {
    setNewPalleteName(e.target.value);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
          <div className="nav-btns">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
            <FormDialog
              palettes={props.palettes}
              handleSave={props.handleSave}
              newPalleteName={newPalleteName}
              handleNewPalleteNameChange={handleNewPalleteNameChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
