import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from "axios"
import Product from '../Product'

function Home() {
    const [products, setProducts] = useState([])

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
            <h1>Welcome to Learners Store</h1>
            <Container className='d-flex flex-wrap mt-4'>
                {products.map((item) => {
                    return (
                        <Product item={item} key={item.title}/>
                    )
                })}
            </Container>
        </div>
    )
}

export default Home