import React from 'react'
import { Button,Card } from 'react-bootstrap'

const Item = ({producto}) => {
    const {name, image, species, status} = producto

    return (
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Especie: {species+'  '}
                        Estado: {status}
                    </Card.Text>
                    <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
    )
}

export default Item