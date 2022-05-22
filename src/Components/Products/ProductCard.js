import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function ProductCard({product}) {



  return (
   <Card as={Link} to={`/products/${product.id}`} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price}</Card.Text>
      {/* <Button variant="primary">Details</Button> */}
    </Card.Body>
   </Card>
  )
}

export default ProductCard