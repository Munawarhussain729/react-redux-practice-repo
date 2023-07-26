import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { addItemToCart, removeItemFromCart } from './../redux/ProductSlice'

function Product({ item }) {
    const dispatch = useDispatch()
    return (
        <div className='m-2 shadow rounded p-3' style={{ width: '300px' }}>
            <div className='d-flex justify-content-center align-items-center'>
                <Image src={item.image} alt={item.title} width='100px' height='100px' />
            </div>
            <p style={{ height: '50px', overflow: 'hidden' }}> <strong>Tiitle:</strong> {item.title}</p>
            <p style={{ height: '100px', overflow: 'hidden' }}><strong>Description:</strong> {item.description}</p>
            <p><strong>Price:</strong> {item.price}$</p>

            <Button onClick={()=> dispatch(addItemToCart(item))}>Add to Cart</Button>
        </div>
    )
}

export default Product