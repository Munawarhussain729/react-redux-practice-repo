import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart } from './../redux/ProductSlice';

function Product({ item, cart }) {
    const dispatch = useDispatch();
    return (
        <div className={cart ? 'd-flex m-2 shadow rounded ' : 'm-2 shadow rounded p-3'} style={cart ? { minWidth: '67vw' } : { width: '300px' }}>
            {cart ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-9'>
                            <p><strong>Title:</strong> {item.title}</p>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Price:</strong> {item.price}$</p>
                            <Button onClick={() => dispatch(removeItemFromCart(item))}>Remove</Button>
                        </div>
                        <div className='col-3'>
                            <Image src={item.image} alt={item.title} width='200px' height='200px' />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image src={item.image} alt={item.title} width='100px' height='100px' />
                    </div>
                    <p style={{ height: '50px', overflow: 'hidden' }}><strong>Title:</strong> {item.title}</p>
                    <p style={{ height: '100px', overflow: 'hidden' }}><strong>Description:</strong> {item.description}</p>
                    <p><strong>Price:</strong> {item.price}$</p>
                    <Button onClick={() => dispatch(addItemToCart(item))}>Add to Cart</Button>
                </>
            )}
        </div>
    );
}

export default Product;
