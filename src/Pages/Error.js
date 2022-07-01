import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container text-center my-5">
            <h1>Page Not Found !!</h1>
            <button className="btn mt-3"><Link to="/" className="btn">Back To Home</Link></button>
        </div>
    );
}

export default Error;