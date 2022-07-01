import React from "react";
import { useParams } from "react-router-dom";
import SingleProduct from '../Components/SingleProduct';

const IndividualProduct = () => {

    const { id } = useParams();

    return <SingleProduct id={id} />;
}

export default IndividualProduct;