import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function ProductCard({product}) {

  return (
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price}</Card.Text>
      {/* <Button variant="primary">Details</Button> */}
      <Card.Link href={`/products/${product.id}`} className="btn btn-info">Details</Card.Link>
    </Card.Body>
   </Card>
  )
}

export default ProductCard


// to make whole card go .id
// as={Link} to={`/products/${product.id}`}