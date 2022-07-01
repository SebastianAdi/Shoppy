import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container login-form my-4 ">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-bolder text-center">Log In</h1>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="my-2 d-flex flex-row justify-content-between">
                        <input type="checkbox" className="mt-1" value="remember-me" /><span className="me-2 rem">Remember me</span>
                        <Link to="/forms/forgotpassword"><p className="ms-2 para-text">Forgot Password?</p></Link>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-0" type="submit">Login</button>
                    <p className="text-center my-2 para-text"><span className="fw-bolder me-2">Not a Member?</span><Link to="/forms/register">Create New Account</Link></p>
                </form>
            </main>
        </div>
    );
}

export default Login;