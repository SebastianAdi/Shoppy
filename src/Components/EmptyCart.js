import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="container text-center mx-auto my-5">
            <h1>No Items is Cart</h1>
            <Link to="/products" className="btn mt-2">Shop Now</Link>
        </div>
    );
}
export default EmptyCart;