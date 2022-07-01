import React from "react";
import { Link } from 'react-router-dom';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = ({ pid }) => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0 px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          <div className="wrapper">
            <h4>SHOPPY</h4>
          </div></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 bg-dark border-0">
            <li className="nav-item ms-3">
              <Link className="nav-link bg-dark" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link bg-dark" aria-current="page" to="/products">Products</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link bg-dark" aria-current="page" to="/about">About</Link>
            </li>
          </ul>

          <div className="button-list">
            <Link className="btn user bg-dark" to="/forms/login">Login</Link>
            <Link className="btn user me-1 p-1 position-relative bg-dark" to="/cart" state={pid}>
              <CartIcon className="text-white bg-dark" /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill mt-1">{pid.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;