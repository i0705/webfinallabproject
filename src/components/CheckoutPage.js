import React from "react";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../helpers/FormatPrice";
import { FaMinus, FaPlus,FaTrash } from "react-icons/fa";


const CheckoutPage = () => {
    const { cart,subtotal, shippingFee, grandTotal, setIncrease, setDecrease,removeItem } =
    useCartContext();

  const handleIncrease = (id) => {
    setIncrease(id);
  };

  const handleDecrease = (id) => {
    setDecrease(id);
  };


  return (
    <div>
      <h2>Checkout Page</h2>
      <div>
        <h3>Cart Details:</h3>
        {cart.map((curElem) => (
          <div key={curElem.id}>
            <p>{curElem.name}</p>
            <p>Price: <FormatPrice price={curElem.price} /></p>
            <p>Quantity:  <button onClick={() => handleDecrease(curElem.id)}><FaMinus style={{backgroundColor:"white"}}/></button>{curElem.amount} <button onClick={() => handleIncrease(curElem.id)}><FaPlus/></button></p>
           
             <br />
            
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h3>Payment Options:</h3>
        {/* Implement your payment options logic here */}
        <p>Payment options will be displayed here...</p>
      </div>
      <div>
        <h3>Order Total:</h3>
        <p>Subtotal: <FormatPrice price={subtotal} /></p>
        <p>Shipping Fee: <FormatPrice price={shippingFee} /></p>
        <p>Grand Total: <FormatPrice price={grandTotal} /></p>
      </div>
    </div>
  );
};

export default CheckoutPage;
