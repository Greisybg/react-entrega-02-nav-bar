import React from 'react'
import './ItemListContainer.css';

function ItemListContainer({greeting}) {
  return (
      <h3 className=' myitemlist myh3'>{greeting}</h3>
  )
}

export default ItemListContainer
