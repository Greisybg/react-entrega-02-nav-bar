import React, {useState} from 'react'

const Evento = () => {

    const [texto, setTexto] = useState('Iniciando el texto')
    const eventoClick = () => {
        console.log('Me diste un click')
        setTexto('Cambiando el texto')
    }
  return (
    <div>
      <h2>{texto}</h2>
      <button onClick={ () => eventoClick()}>Click</button>
    </div>
  )
}

export default Evento
