import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "../Product";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart() {
  const Items = useSelector((state) => state.ProductReducer.cartItems);

  return (
    <>
      <Button className="float-end">
        <Link  style={{color:"white"}} to="/">Home</Link>
      </Button>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h3>Your Cart Items are: </h3>
        <h4>See your cart items here</h4>
        <div>
          {Items.map((item) => {
            return <Product item={item} key={item.title} cart={true} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Cart;
