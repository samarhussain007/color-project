import logo from "./logo.svg";

import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route
        path="/palette/:id"
        element={<Pallete palette={generatedPallete(...seedColors)} />}
      />
    </Routes>
  );
}

export default App;
