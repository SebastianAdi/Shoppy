import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Cart from './Pages/Cart';
import Forms from './Pages/Forms';
import Footer from './Components/Footer';
import IndividualProduct from './Pages/IndividualProduct';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Products from './Pages/Products';
import Modal from './Components/Modal';
import Payment from './Pages/Payment';
import Success from './Pages/Success';
import "react-loading-skeleton/dist/skeleton.css";

export const CartContext = React.createContext();

function App() {

  const [id, setId] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState("");

  const idSetter = (productId) => {
    setId([...id, ...productId]);
  }
  const idRemover = (productId) => {
    const newArray = [].concat(id);
    newArray.splice(newArray.indexOf(productId), 1);
    setId(newArray);
  }

  const removeAll = (productId) => {
    const newArray = id.filter((item) => item !== productId);
    setId(newArray);
    setIsModalOpen("Product removed from cart");
  }

  const clearCart = () => {
    setId([]);
    setIsModalOpen("Cart Cleared");
  }

  return (
    <CartContext.Provider value={{ idSetter, idRemover, removeAll, setIsModalOpen, isModalOpen, clearCart }}>
      <div className="main">
        <Navbar pid={id} />
        {isModalOpen && <Modal />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/forms" element={<Forms />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
