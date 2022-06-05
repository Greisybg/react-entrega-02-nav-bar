import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const aumentar = () => {
        console.log('Click')
        setContador(contador + 1)
    }

  return (
    <div>
      <h2>Contador</h2>
      <h3>Nuestro numero aumentando: {contador}</h3>
      <button onClick={() => aumentar()}>Aumentar</button>
      <h4>{contador > 25 ? 'calor' : 'friisimo'}</h4>
    </div>
  )
}

export default Contador

