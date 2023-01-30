import logo from "./logo.svg";
import "./App.css";
import Pallete from "./pallete";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";

function App() {
  return (
    <div className="App">
      <Pallete palette={generatedPallete(seedColors[4])} />
    </div>
  );
}

export default App;
