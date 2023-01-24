import logo from "./logo.svg";
import "./App.css";
import Pallete from "./pallete";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
