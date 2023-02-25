import { Routes, Route, useParams } from "react-router-dom";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import PalleteList from "./PalleteList.js";
import SingleColorPalette from "./SingleColorPalette";
import NewPalleteForm from "./NewPalleteForm";
import { useState } from "react";

function App() {
  const savePalletejson = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savePalletejson || seedColors);

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
    <Routes>
      <Route
        path="/"
        element={
          <PalleteList
            palettes={palettes}
            deletePalette={deletePalette}
            resetPallete={resetPallete}
          />
        }
      />
      <Route
        path="/palette/new"
        element={
          <NewPalleteForm savePallete={savePallete} palettes={palettes} />
        }
      />
      <Route path="/palette/:id" element={<Pallete palette={palettes} />} />
      <Route
        path="/palette/:id/:colorId"
        element={<SingleColorPalette palette={palettes} />}
      />
    </Routes>
  );
}

export default App;
