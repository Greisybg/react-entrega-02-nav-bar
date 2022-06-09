import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import './ItemListContainer.css';

function ItemListContainer({greeting}) {
const [productos, setProductos] = useState([])

useEffect(() => {
  fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .catch(error => console.error("Error:", error))
  .then(res => setProductos(res.results))
}, [])

console.log(productos)

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
      // <h3 className=' myitemlist myh3'>{greeting}</h3>
  )
}

export default ItemListContainer
