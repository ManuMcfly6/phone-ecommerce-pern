import React, { useState } from "react";
import styled from "styled-components";
export default function CartItem({ item, handlers }) {
  const [countItem, setCountItem] = useState(1);
  const { id, title, img, price } = item;

  item.total = price * countItem;

  const { updateCart, removeItemToCart } = handlers;
  if (countItem === 0) {
    removeItemToCart(id);
  }
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <ProductIcon src={img} className="img-fluid" alt={title} />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none mx-1"></span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <BtnBlack
              className="btn btn-black mx-1"
              onClick={() => {
                setCountItem((state) => state - 1);
                updateCart();
              }}
            >
              {" "}
              -
            </BtnBlack>
            <BtnBlack className="btn btn-black mx-1">{countItem}</BtnBlack>
            <BtnBlack
              className="btn btn-black mx-1"
              onClick={() => {
                setCountItem((state) => state + 1);
                updateCart();
              }}
            >
              {" "}
              +
            </BtnBlack>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <TrashIcon className="cart-icon" onClick={() => removeItemToCart(id)}>
          <i className="fas fa-trash" />
        </TrashIcon>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {item.total}</strong>
        <hr></hr>
      </div>
    </div>
  );
}
const BtnBlack = styled.span`
  background: transparent;
  text-transform: capitalize;
  font-size: 0.8rem;
  color: var(--mainDark);
  border-radius: 0;
  border: 0.1rem solid var(--mainDark);
  &:hover {
    background: var(--mainDark);
    color: var(--mainWhite);
  }
`;
const TrashIcon = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--mainYellow);
`;
const ProductIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;
