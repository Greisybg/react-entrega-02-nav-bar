import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MUNavBar from "./components/MUNavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount.jsx";

function App() {
  const onAdd = (count) => {
    alert(`Sumaste ${count} productos al carrito`);

  }
  return (
    <div className="App">
      <MUNavBar />
      <ItemListContainer greeting={'Ropa y accesorios para todas las etapas de la niñez'} />
      <ItemCount inicial={1} max={10} onAdd={onAdd} />
    </div>
  );
}

export default App;

