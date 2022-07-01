import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import StarIcon from '@mui/icons-material/StarOutlined';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SingleProduct = ({ id }) => {

    const { idSetter, setIsModalOpen } = useContext(CartContext);

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        idSetter(Array(Number(quantity)).fill(Number(id)));
        setIsModalOpen("Product added to Cart");
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${Number(id)}`)
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
                setProduct(data);
            });
    }, [])

    if (error) {
        return (
            <div className="container">
                <h2 className="mx-auto my-4">URL NOT FOUND....</h2>
            </div>
        );
    }

    const Loading = () => {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-11 col-md-6 col-lg-5 mb-3 skell">
                        <SkeletonTheme color="#adaaaa" highlightColor='#ffffff' className="bg-dark">
                            <section>
                                <Skeleton height={500} />
                            </section>
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-11 col-md-6 col-lg-7 skell">
                        <SkeletonTheme color="#edebeb" highlightColor='#ffffff'>
                            <Skeleton height={60} />
                            <Skeleton height={30} width={150} />
                            <Skeleton height={40} width={150} className="mt-2" />
                            <Skeleton height={140} className="mt-2" />
                            <section className="my-4">
                                <div className="d-flex">
                                    <Skeleton height={40} width={150} />
                                    <Skeleton height={40} width={150} className="mx-4" />
                                </div>
                                <div className="d-flex">
                                    <Skeleton height={40} width={150} />
                                    <Skeleton height={40} width={150} className="mx-4" />
                                </div>
                                <div className="d-flex">
                                    <Skeleton height={40} width={150} />
                                    <Skeleton height={40} width={150} className="mx-4" />
                                </div>
                            </section>
                            <div className="d-flex justify-content-center">
                                <Skeleton height={40} width={150} />
                                <Skeleton height={40} width={150} className="mx-4" />
                            </div>
                        </SkeletonTheme>
                    </div>
                </div>
            </div>
        );
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const Product = () => {
        const { title, image, price, description, rating, category } = { ...product };
        return (
            <div className="container my-5">
                <div className="row p-1">

                    <div className="col-sm-11 col-md-6 col-lg-5 mb-3">
                        <div className="img-large">
                            <img src={image}
                                alt="Not found" />
                        </div>
                    </div>

                    <div className="col-sm-11 col-md-6 col-lg-7 mx-auto">
                        <h2>{title}</h2>
                        <p>Rating {rating.rate}<StarIcon className="fs-4" style={{ marginTop: "-3px", color: "rgb(250, 250, 24)" }} /></p>
                        <h4>$ {price}</h4>
                        <p>{description}</p>

                        <div className="row row-list mb-3">
                            <div className="col-8">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><strong>Available :</strong></td>
                                            <td>In stock</td>
                                        </tr>
                                        <tr>
                                            <td><strong>SKU :</strong></td>
                                            <td>Recrfxv3EwpvJwvjq</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Brand :</strong></td>
                                            <td>{category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="buttons d-flex flex-column">
                            <div className="quantity mb-3">
                                <label htmlFor=""><strong>Quantity : </strong></label>
                                <select className="ms-2" value={quantity} onChange={handleQuantity}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="button-list text-center mb-2">
                                <button className="btn mx-2" onClick={handleClick} >Add To Cart</button>
                                <Link className="btn mx-2" to="/payment" state={[{ ...product, qty: quantity }]}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {
                loading || product.length === 0 ? <Loading /> : <Product />
            }
        </>
    );
}

export default SingleProduct;