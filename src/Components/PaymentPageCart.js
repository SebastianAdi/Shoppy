import React from "react";

const PaymentPageCart = ({ title, image, price, qty }) => {
    return (
        <li className="list-group-item d-flex justify-content-between lh-sm payment_cart-list">
            <div>
                <h6 className="my-0">{title.substring(0, 30)}...</h6>
                <span className="text-muted">${price * qty} (x{qty})</span>
            </div>
            <img src={image} alt="Not found" />
        </li>
    );
}

export default PaymentPageCart;