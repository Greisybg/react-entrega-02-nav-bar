import React from 'react'
import Link  from "react-router-dom";
import {ListGroup} from 'react-bootstrap'
const NavBar = () => {
    return (
<ListGroup horizontal>
  <ListGroup.Item><h3>miniMI</h3></ListGroup.Item>
  <ListGroup.Item><a href='#'>Ropa</a></ListGroup.Item>
  <ListGroup.Item><a href='#'>Jugetes</a></ListGroup.Item>
  <ListGroup.Item><a href='#'>Promociones</a></ListGroup.Item>
</ListGroup>
            );
          };
          

export default NavBar