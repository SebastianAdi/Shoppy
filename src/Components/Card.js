import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import StarIcon from '@mui/icons-material/StarOutlined';

const Card = ({ id, image, title, price, rating }) => {

    const { idSetter, setIsModalOpen } = useContext(CartContext);

    const handleClick = () => {
        idSetter([id]);
        setIsModalOpen(" Product added to Cart");
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card h-100 p-2">
                <Link to={`/product/${id}`}><img src={image} className="card-img-top" alt="Not found" /></Link>
                <div className="container p-0 mt-2 text-center">
                    <h5 className="card-title">{title.substr(0, 25)}...</h5>
                    <p className="badge mb-0"><span>{rating.rate}</span><StarIcon style={{ fontSize: "1.2rem" }} /></p>
                    <p className="my-2">${price}</p>
                    <button className="btn rounded-pill w-50" onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;