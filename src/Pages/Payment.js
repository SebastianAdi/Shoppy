import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentPageCart from "../Components/PaymentPageCart";

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const Product = location.state.Products;
    const total = location.state.grand_total;

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
        navigate("/success");
    }

    return (
        <div className="container payment my-5 py-3">

            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-7 col-lg-8 order-2 order-md-0">
                    <h4 className="mb-3 text-center fw-bolder">Delivery address</h4>

                    <form className="needs-validation" onSubmit={submitHandler}>
                        <div className="row g-3">
                            <div className="col-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                                <div className="invalid-feedback">
                                    Please enter a valid email id.
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="phone" placeholder="Enter Phone" required />
                                <div className="invalid-feedback">
                                    Please enter a valid phone number.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter address" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="city" className="form-label">City</label>
                                <select className="form-select" id="city" required>
                                    <option value="">Choose...</option>
                                    <option>Lucknow</option>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                    <option>Chennai</option>
                                    <option>Kolkata</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="country" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Punjab</option>
                                    <option>Tami Nadu</option>
                                    <option>Madhya Pradesh</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="pincode" className="form-label">PinCode</label>
                                <input type="text" className="form-control" id="pincode" required />
                                <div className="invalid-feedback">
                                    pin code required.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />
                        <h4 className="mb-3 text-center fw-bolder">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                <label className="form-check-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                <label className="form-check-label" htmlFor="paypal">PayPal</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-7">
                                <label htmlFor="card-name" className="form-label">Name on card</label>
                                <input type="text" className="form-control" id="card-name" required />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div className="col-md-7">
                                <label htmlFor="card-number" className="form-label">Card number</label>
                                <input type="text" className="form-control" id="card-number" required />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-6 col-md-3">
                                    <label htmlFor="card-expiration" className="form-label">Expire Date</label>
                                    <input type="text" className="form-control" id="card-expiration" required />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-6 col-md-3">
                                    <label htmlFor="card-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="card-cvv" required />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="submit-button d-flex justify-content-center">
                            <button className="btn fw-bolder w-50" type="submit">PLACE ORDER</button>
                        </div>
                    </form>
                </div>


                <div className="col-10 col-md-5 col-lg-4 order-sm-1">
                    <h4 className="text-center mb-3 fw-bolder">Cart Items</h4>

                    <ul className="list-group mb-3">
                        {
                            Product.map((item) => {
                                return <PaymentPageCart key={item.id} {...item} />
                            })
                        }
                    </ul>
                    <h4 style={{ textAlign: "center" }}>Total : ${total.toFixed(2)}</h4>
                </div>
            </div>

        </div>
    );
}

export default Payment;