import './App.css';
import {GriffinBot} from "./griffinbot";
import { useState } from "react";

const griffinBot = new GriffinBot();

function App() {
  const [messages, setMessages] = useState([]);
  if(!griffinBot.instance)
  {
    griffinBot.Start(setMessages);
  }
  console.log(messages);
  
  return (
    <div className="App">
      <h1>GriffinBot</h1>
      <h2>Console Messages</h2>
      <ul>
        {
          messages.map((message, index)=>{return (<li key={index}>{message}</li>)})
        }
      </ul>
    </div>
  );
}

export default App;
