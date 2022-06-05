import React from "react";
import Contador from "./components/Contador.jsx";
import Evento from "./components/Evento.jsx";
import Parrafo from "./components/Parrafo.jsx";
import Variables from "./components/Variables.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Parrafo/>
      <Variables/>
      <Evento/>
      <Contador/>
    </div>
  );
}

export default App;

