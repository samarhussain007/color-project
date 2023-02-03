import logo from "./logo.svg";

import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
import PalleteList from "./PalleteList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PalleteList palettes={seedColors} />} />
      <Route
        path="/palette/:id"
        element={<Pallete palette={generatedPallete(...seedColors)} />}
      />
    </Routes>
  );
}

export default App;
