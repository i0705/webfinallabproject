import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItem, setTotalItem] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [cartTotalItems, setCartTotalItems] = useState(0);
 
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
 

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.amount, 0);
    setCartTotalItems(totalItems);
  }, [cart]);
  useEffect(() => {
    updateCartTotals();
  }, [cart]);

  const updateCartTotals = () => {
    let calculatedSubtotal = 0;
    let totalItems = 0;
  
    cart.forEach((item) => {
      calculatedSubtotal += item.price * item.amount;
      totalItems += item.amount;
    });
  
    const calculatedShippingFee = 100; // Replace with your shipping fee logic
    const calculatedGrandTotal = calculatedSubtotal + calculatedShippingFee;
  
    setSubtotal(calculatedSubtotal);
    setShippingFee(calculatedShippingFee);
    setGrandTotal(calculatedGrandTotal);
    setTotalItem(totalItems);
  };
  
  const addToCart = (id, amount, product) => {
    const existingProduct = cart.find((curItem) => curItem.id === id );
  
    if (existingProduct) {
      const updatedProduct = cart.map((curElem) => {
        if (curElem.id === id ) {
          let newAmount = curElem.amount + amount;
  
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
  
      setCart(updatedProduct);
      localStorage.setItem("cart", JSON.stringify(updatedProduct));
    } else {
      const cartProduct = {
        id: id ,
        name: product.name,
        
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      const updatedCart = [...cart, cartProduct];
  
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const setIncrease = (id) => {
    // Find the item in the cart
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        // Increase the amount by 1
        let newAmount = item.amount + 1;

        // Check if the amount exceeds the maximum value
        if (newAmount > item.max) {
          newAmount = item.max;
        }

        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const setDecrease = (id) => {
    // Find the item in the cart
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        // Decrease the amount by 1
        let newAmount = item.amount - 1;

        // Check if the amount goes below 1
        if (newAmount < 1) {
          newAmount = 1;
        }

        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]); // Clears the cart by setting the cart state to an empty array
    localStorage.removeItem("cart"); // Removes the cart from local storage
  };
  return (
    <CartContext.Provider value={{ cart, totalItem, totalAmount, addToCart, removeItem, shippingFee ,clearCart,setIncrease,setDecrease,grandTotal,subtotal}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };