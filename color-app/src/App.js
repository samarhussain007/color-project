import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Pallete from "./pallete";
import PalleteList from "./PalleteList.js";
import SingleColorPalette from "./SingleColorPalette";
import NewPalleteForm from "./NewPalleteForm";
import seedColors from "./seedColors";
import "./app.css";

function App() {
  const savePalletejson = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savePalletejson || seedColors);
  const location = useLocation();
  const savePallete = (newPallete) => {
    setPalettes((prevState) => {
      const updatedPalettes = [...prevState, newPallete];
      syncLocalStorage(updatedPalettes);
      return updatedPalettes;
    });
  };

  const syncLocalStorage = (updatedPalettes) => {
    window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes));
  };

  const deletePalette = (id) => {
    setPalettes((prevState) => {
      const updatedPalettes = prevState.filter((pallete) => pallete.id !== id);
      syncLocalStorage(updatedPalettes);
      return updatedPalettes;
    });
  };

  const resetPallete = () => {
    window.localStorage.removeItem("palettes");
    setPalettes(seedColors);
  };

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="item" timeout={500}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <div className="page">
                <PalleteList
                  palettes={palettes}
                  deletePalette={deletePalette}
                  resetPallete={resetPallete}
                />
              </div>
            }
          />
          <Route
            path="/palette/new"
            element={
              <div className="page">
                <NewPalleteForm savePallete={savePallete} palettes={palettes} />
              </div>
            }
          />
          <Route
            path="/palette/:id"
            element={
              <div className="page">
                <Pallete palette={palettes} />
              </div>
            }
          />
          <Route
            path="/palette/:id/:colorId"
            element={
              <div className="page">
                <SingleColorPalette palettes={palettes} />
              </div>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
