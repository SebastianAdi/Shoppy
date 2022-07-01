import React, { useEffect, useState } from 'react';
import Card from './Card';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const url = "https://fakestoreapi.com/products";

const FeaturedItems = () => {

    const [products, setProducts] = useState([]);
    const [setter, setSetter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
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
                setProducts(data);
                setSetter(data);
            });
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
            <>
                <div className="row">
                    <div className="col-9 mx-auto">
                        <SkeletonTheme color="#adaaaa" highlightColor='#ffffff'>
                            <section className='mx-auto d-flex justify-content-center'>
                                <Skeleton height={50} width={650} className="mb-3" />
                            </section>
                        </SkeletonTheme>
                    </div>
                </div>
                <div className="row ">
                    <SkeletonTheme color="#adaaaa" highlightColor='#ffffff'>
                        <div className="col-11 col-md-6 col-lg-4">
                            <Skeleton height={400} />
                        </div>
                        <div className="col-11 col-md-6 col-lg-4">
                            <Skeleton height={400} />
                        </div>
                        <div className="col-11 col-md-6 col-lg-4">
                            <Skeleton height={400} />
                        </div>
                    </SkeletonTheme>
                </div>
            </>
        );
    }

    const handleClick = (e) => {
        if (e.target.innerText === "All") {
            setSetter(products);
            return;
        }
        const newproducts = products.filter((item) => item.category === e.target.innerText);
        setSetter(newproducts);
    }

    const Products = () => {
        return (
            <div className="container">
                <div className="button-list my-4 text-center">
                    <div className="btn ms-3 my-2" onClick={handleClick}>All</div>
                    <div className="btn ms-3 my-2" onClick={handleClick}>men's clothing</div>
                    <div className="btn ms-3 my-2" onClick={handleClick}>women's clothing</div>
                    <div className="btn ms-3 my-2" onClick={handleClick}>electronics</div>
                    <div className="btn ms-3 my-2" onClick={handleClick}>jewelery</div>
                </div>
                <div className="row">
                    {
                        setter.map((product) => {
                            return <Card key={product.id} {...product} />
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-3 mb-3">
            <h1 className="text-center my-3 fw-bolder">Featured Products</h1>
            {
                loading ? <Loading /> : <Products />
            }

        </div>
    );
}

export default FeaturedItems;