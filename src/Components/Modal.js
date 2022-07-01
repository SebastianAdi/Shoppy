import React, { useContext, useEffect } from "react";
import { CartContext } from "../App";
import CheckIcon from '@mui/icons-material/CheckCircle';

const Modal = () => {

    const { setIsModalOpen, isModalOpen } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            setIsModalOpen("");
        }, 1200)
    }, [])

    return (
        <div className="container mx-auto text-center pt-2 pb-0" id="modal">
            <p className="fw-bolder"><CheckIcon style={{ color: "#226324" }} />{isModalOpen}</p>
        </div>
    );
}

export default Modal;