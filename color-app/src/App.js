import logo from "./logo.svg";

import { Routes, Route, useParams } from "react-router-dom";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
import PalleteList from "./PalleteList.js";
import SingleColorPalette from "./SingleColorPalette";
import NewPalleteForm from "./NewPalleteForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PalleteList palettes={seedColors} />} />
      <Route path="/palette/new" element={<NewPalleteForm />} />
      <Route
        path="/palette/:id"
        element={<Pallete palette={generatedPallete(...seedColors)} />}
      />
      <Route
        path="/palette/:id/:colorId"
        element={<SingleColorPalette palette={seedColors} />}
      />
    </Routes>
  );
}

export default App;
