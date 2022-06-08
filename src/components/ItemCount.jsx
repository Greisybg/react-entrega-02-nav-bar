import React, { useState } from 'react'

const ItemCount = ({ inicial, max, onAdd }) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        count < max ? setCount(count + 1) : alert('No hay mas productos en Stock')

    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes agregar menos de 1 producto al carrito')
    }

    const reset = () => {
        setCount(inicial)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={restar}>-</button>
            <button onClick={() => { onAdd(count); reset() }}>Agregar al carrito</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount