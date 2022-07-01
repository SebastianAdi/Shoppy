import React from "react";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const CartItem = ({ id, title, price, image, qty, category, removeHandler, incrQty, decrQty }) => {

  return (
    <>
      <div className="container w-75 my-4">
        <div className="row d-flex justify-content-evenly">
          <div className=" col-12 col-md-6 text-center">
            <img src={image} alt="Not found" className="mt-2" />
            <div className="button-list mt-2">
              <button className="btn me-2 px-2 py-0 fw-bolder" onClick={() => decrQty(id)}>-</button>
              <span className="fw-bolder">{qty}</span>
              <button className="btn ms-2 px-2 py-0 fw-bolder" onClick={() => incrQty(id)}>+</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="text-secondary">{category}</h5>
            <h4>{title}</h4>
            <h5>$ {qty * price} (x{qty})</h5>
            <button className="btn " onClick={() => { removeHandler(id) }}>Remove<DeleteIcon className="fs-3" /></button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default CartItem;