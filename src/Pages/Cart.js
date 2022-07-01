import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "../App";
import CartItem from "../Components/CartItem";
import EmptyCart from "../Components/EmptyCart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const url = "https://fakestoreapi.com/products";

const Cart = () => {
    const { idSetter, idRemover, removeAll, clearCart } = useContext(CartContext);

    const location = useLocation();
    const idArray = location.state;

    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = () => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299)
                    return resp.json();
                else {
                    setError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((data) => {
                setLoading(false);
                let updatedProducts = [];
                idArray.forEach(id => {
                    if (updatedProducts.some(item => item.id === id)) {
                        updatedProducts.forEach(item => {
                            if (item.id === id)
                                item.qty++;
                        })
                    }
                    else {
                        const newProduct = data.find((product) => product.id === id);
                        updatedProducts.push({ ...newProduct, qty: 1 });
                    }
                });
                setProducts(updatedProducts);
            });
    }

    useEffect(() => {
        if (idArray.length === 0)
            return;
        fetchData();
    }, [])

    if (error) {
        return (
            <div className="container">
                <h2>URL NOT FOUND....</h2>
            </div>
        );
    }

    const Loading = () => {
        return (
            <SkeletonTheme color="#adaaaa" highlightColor='#ffffff' className="bg-dark">
                <section className="d-flex mx-auto mt-3">
                    <Skeleton height={40} width={160} className="mx-2" />
                    <Skeleton height={40} width={160} className="mx-2" />
                </section>
                <section>
                    <Skeleton height={200} className="container mt-3 d-flex" />
                    <Skeleton height={220} width={450} className="my-1 d-flex mx-auto" />
                </section>
            </SkeletonTheme>

        );
    }

    const incrQty = (id) => {
        const newArray = [].concat(Products);
        newArray.forEach((item) => {
            if (item.id === id && item.qty < 5) {
                item.qty++;
                idSetter([id]);
            }
        });
        setProducts(newArray);
    }

    const decrQty = (id) => {
        const newArray = [].concat(Products);
        newArray.forEach((item) => {
            if (item.id === id && item.qty > 1) {
                item.qty--;
                idRemover([id]);
            }
        });
        setProducts(newArray);
    }

    const removeHandler = (id) => {
        removeAll(id);
        setProducts(Products.filter((item) => item.id !== id));
    }

    const emptyCart = () => {
        setProducts([]);
        clearCart();
    }

    const subtotal = () => {
        const total = Products.reduce((prev, curr) => prev + (curr.price * curr.qty), 0);
        return total;
    }

    const shipping_charges = () => {
        return (subtotal() / 80);
    }

    const Show = () => {
        return (
            (Products.length === 0) ? <EmptyCart /> :
                <>

                    <div className="container mt-3">
                        <div className="button-list text-center">
                            <Link className="btn mx-2 my-2" to="/products">Continue Shopping</Link>
                            <button className="btn mx-2 my-2" onClick={emptyCart}>Clear Cart</button>
                        </div>
                        {
                            Products.map((item, index) => {
                                if (Products.indexOf(item) === index)
                                    return <CartItem key={item.id} {...item} removeHandler={removeHandler} incrQty={incrQty} decrQty={decrQty} />
                                return console.log("repeated");
                            })
                        }
                    </div>
                    <div className="container text-center">
                        <h2>ORDER SUMMARY</h2>
                        <table className="mx-auto">
                            <tbody>
                                <tr>
                                    <td><h4>Subtotal : </h4></td>
                                    <td><h5>$ {subtotal().toFixed(2)}</h5></td>
                                </tr>
                                <tr>
                                    <td><h4>Shipping : </h4></td>
                                    <td><h5>$ {shipping_charges().toFixed(2)}</h5></td>
                                </tr>
                                <tr className="border-top">
                                    <td><h4>Grand Total : </h4></td>
                                    <td><h4>$ {(subtotal() + shipping_charges()).toFixed(2)}</h4></td>
                                </tr>
                            </tbody>
                        </table>
                        <Link className="btn my-3" to="/payment" state={{ Products, grand_total: subtotal() + shipping_charges() }}>PROCEED TO PAY</Link>
                    </div>
                </>
        );
    }

    return (
        <>
            {
                (idArray.length === 0) ?
                    <EmptyCart /> :
                    (loading ? <Loading /> : <Show />)
            }
        </>
    );
}

export default Cart;