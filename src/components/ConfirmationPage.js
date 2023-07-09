import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";

const ConfirmationPage = ({ userName, orderNumber}) => {
    console.log(userName, orderNumber)
    const{grandTotal}=useCartContext()
  return (
    <div>
      <h3>
        <FaCheck /> Thanks for your order, {userName}!
      </h3>
      
      <p>Payment Details: Cash On Delivery</p>
      <p>Grand Total: <FormatPrice price={grandTotal} /></p>
      <br />
      <NavLink to="/products">
        <Button>Continue Shopping</Button>
      </NavLink>
    </div>
  );
};

export default ConfirmationPage;
