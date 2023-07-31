import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductDisplay from './ProductDisplay'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

function Home() {
    const [products, setProducts] = useState([])
    const Items = useSelector((state) => state.ProductReducer.cartItems)
    const [showCart, setShowCart] = useState(false)
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                if (response.data) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.log("Error is ", error);
            }
        }

        fetchProducts();

    }, [])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-4'>
            <div className='d-flex justify-content-between w-75' >
                <h1 onClick={()=>setShowCart(false)} style={{cursor:"pointer"}}>Welcome to Learners Store</h1>
                {
                    Items?.length > 0 ? <Link to='/cart'><Button onClick={()=>setShowCart(!showCart)}>Cart {Items.length}</Button></Link> : <div></div>
                }
            </div>
            {
                showCart ? (<Cart />) : (<ProductDisplay products={products} />)
            }

        </div>
    )
}

export default Home