import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MUNavBar from "./components/MUNavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
function App() {
  return (
    <div className="App">
      <MUNavBar/>
      <ItemListContainer greeting={'Ropa y accesorios para todas las etapas de la niñez'}/>
    </div>
  );
}

export default App;

