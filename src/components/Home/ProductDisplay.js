import React from 'react'
import Product from '../Product'
import { Container } from 'react-bootstrap'

function ProductDisplay({products}) {
    return (
        <Container className='d-flex flex-wrap mt-4'>
            {products.map((item) => {
                return (
                    <Product item={item} key={item.title} cart={false}/>
                )
            })}
        </Container>
    )
}

export default ProductDisplay