import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'
    const image = 'https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2022/05/Imagenes-Antonio-y-Mirabel-madrigal.png?ssl=1'
  return (
    <div>
      <h2>Nuevo componente {saludo}</h2>
      <p>Parrafo de variables</p>
      <img src={image} alt=''/>
    </div>
  )
}

export default Variables
