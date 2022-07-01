import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="container text-center my-5">
            <h1>Purchase Successful</h1>
            <h3>Your order will be delivered at your doorstep soon</h3>
            <button className="btn mt-3"><Link to="/" className="btn">Back To Home</Link></button>
        </div>
    );
}

export default Success;