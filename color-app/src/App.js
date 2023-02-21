import logo from "./logo.svg";

import { Routes, Route, useParams } from "react-router-dom";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
import PalleteList from "./PalleteList.js";
import SingleColorPalette from "./SingleColorPalette";
import NewPalleteForm from "./NewPalleteForm";
import { useState } from "react";

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const savePallete = (newPallete) => {
    // console.log(newPallete);
    setPalettes([...palettes, newPallete]);
  };
  return (
    <Routes>
      <Route path="/" element={<PalleteList palettes={palettes} />} />
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
