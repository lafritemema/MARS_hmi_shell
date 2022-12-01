import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Sequencer from 'sequencer/Sequencer';
import BuildProcess from 'buildprocess/BuildProcess';

const SEQUENCER_API_ENPOINT = 'localhost:4002';
const BUILDPROCESS_API_ENDPOINT = 'localhost:4004';

const App = () => {
  return (
    <div className="App">
      <Sequencer endpoint={SEQUENCER_API_ENPOINT} />
      <BuildProcess endpoint={BUILDPROCESS_API_ENDPOINT} />
    </div>
  );
}

/*const ENDPOINT = process.env.BACKENDPOINT ?
    process.env.BACKENDPOINT :
    process.env.REACT_APP_BACKENDPOINT*/

const root = ReactDOM
  .createRoot(document.getElementById("root"));
root.render(<App/>);

