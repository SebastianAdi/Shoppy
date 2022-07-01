import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="container login-form my-4">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-bolder text-center">Forgot Password?</h1>
                    <p className="text-center">Enter your Email to get OTP</p>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    <p className="text-center para-text my-2"><Link to="/forms/login"> Back to Login</Link></p>
                </form>
            </main>
        </div>
    );
}

export default ForgotPassword;