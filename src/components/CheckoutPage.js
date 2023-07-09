import React from "react";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../helpers/FormatPrice";
import { FaMinus, FaPlus,FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { NavLink,useNavigate } from "react-router-dom";
import ConfirmationPage from "./ConfirmationPage";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const CheckoutPage = () => {
 
    const { cart,subtotal, shippingFee, grandTotal, setIncrease, setDecrease,removeItem } =
    useCartContext();
    const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [userName, setUserName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const handleConfirmOrder = () => {
    const generatedOrderNumber = Math.floor(100000 + Math.random() * 900000);
    const generatedUserName = "John Doe";

    setConfirmed(true);
    setOrderNumber(generatedOrderNumber);
    setUserName(generatedUserName);

    navigate("/confirmation");
  };

  if (confirmed) {
    return (
       <ConfirmationPage
      userName={userName}
      orderNumber={orderNumber}
      grandTotal={grandTotal}
    />
    );
  }


  const handleIncrease = (id) => {
    setIncrease(id);
  };

  const handleDecrease = (id) => {
    setDecrease(id);
  };


  return (
    <Wrapper>
    <div>
    <br />
      <h2>Checkout Page</h2>
      <br />
      <div>
        <h3>Cart Details:</h3>
        {cart.map((curElem) => (
          <div key={curElem.id}>
            <p>{curElem.name}</p>
            <p>Price: <FormatPrice price={curElem.price} /></p>
            <p>Quantity: {curElem.amount}</p>
           
             <br />
            
            <hr />
          </div>
        ))}
      </div>
      <br /> <br />
      <div>
        <h3>Payment Options:</h3>
        <br /> <br />
        <input type="radio"/> <span style={{fontSize:"18px"}}>Cash On Delivery</span>
      </div>
      <br /><br />
      <hr />
      <div>
      <br />
        <h3>Order Total:</h3>
        <p>Subtotal: <FormatPrice price={subtotal} /></p>
        <p>Shipping Fee: <FormatPrice price={shippingFee} /></p>
        <p>Grand Total: <FormatPrice price={grandTotal} /></p>
      </div>
    
    <div className="cart-two-button">
          <NavLink to="/products">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={handleConfirmOrder}>
            Confirm Order <FaCheck />
          </Button>
    </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
.cart-one-button{
  margin-top: 2rem;
    display: flex;
    justify-content:flex-end;

    
}
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #9C543A;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: white;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;



export default CheckoutPage;
