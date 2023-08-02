import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductDisplay from './ProductDisplay'
import { Link } from "react-router-dom";
// import Cart from '../Cart/Cart'

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
    const cartstyle={
        color:"white"
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-4'>
            <div className='d-flex justify-content-between w-75' >
                <h1 onClick={()=>setShowCart(false)} style={{cursor:"pointer"}}>Welcome to Learners Store</h1>
                {
                    // Items?.length > 0 ? <Button onClick={()=>setShowCart(!showCart)}>Cart {Items.length}</Button> : <div></div>
                    <Button><Link to="/cart" style={cartstyle}>Cart {Items.length}</Link></Button>
                    

                    //cart button
                }
            </div>
            {
                // showCart ? (<Cart />) : (<ProductDisplay products={products} />)
                <ProductDisplay products={products} />
            }

        </div>
    )
}

export default Home