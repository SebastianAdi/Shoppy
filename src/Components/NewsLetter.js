import React from "react";
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from "react";
import { CartContext } from '../App';

const NewsLetter = () => {
    const { setIsModalOpen } = useContext(CartContext);
    const [mail, setMail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen("Subscribed for updates");
        setMail('');
    }

    return (
        <div className="container mx-auto text-center mt-2 mb-4 py-2 border-top">
            <h1 className="fw-bolder">NewsLetter</h1>
            <p>Get timely updates from your favourite products</p>
            <form className="d-flex col-6 mx-auto" onSubmit={handleSubmit}>
                <input className="form-control letter_comp" type="email" placeholder="Enter Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
                <button className="btn letter_comp" type="submit"><SendIcon /></button>
            </form>
        </div>
    );
}

export default NewsLetter;