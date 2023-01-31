import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";

function App() {
  const Hello = () => <h1>hey there</h1>;
  return (
    <Routes>
      <Route path="/" />
      <Route path="/palette/:id" element={<Hello />} />
    </Routes>
  );
}

export default App;
