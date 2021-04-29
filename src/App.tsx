import './App.css';
import {GriffinBot} from "./griffinbot";

const griffinBot = new GriffinBot();

griffinBot.Start();

function App() {
  return (
    <div className="App">
      <h1>GriffinBot</h1>
    </div>
  );
}

export default App;
