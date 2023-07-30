import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Product from '../Product'
import Home from '../Home/Home'
import { Link } from 'react-router-dom'

function Cart() {
    const Items = useSelector((state) => state.ProductReducer.cartItems)

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>

     <button style={{background:'blue',color:'white'}}><Link style={{textDecoration:'none',color:'white'}} to="/home">Home</Link></button>

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