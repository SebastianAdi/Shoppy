import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container login-form my-4">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-bolder text-center">Register</h1>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I Agree to Terms and Conditions
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <p className="text-center para-text my-2"><span className="fw-bolder">Already Have an Account?</span> <Link to="/forms/login">Login</Link></p>
                </form>
            </main>
        </div>
    );
}

export default SignUp