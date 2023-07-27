import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Product from '../Product'

function Cart() {
    const Items = useSelector((state) => state.ProductReducer.cartItems)

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <h3>Your Cart Items are: </h3>
            <div>
                {Items.map((item) => {
                    return (
                        <Product item={item} key={item.title} cart={true}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default Cart