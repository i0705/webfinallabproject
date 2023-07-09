import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import  About  from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart  from "./Cart";
import {Error} from "./Error"
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FilterContextProvider } from "./context/filter_context";
import CheckoutPage from "./components/CheckoutPage";
import ConfirmationPage from "./components/ConfirmationPage";
import Login from "./Login";
const App = () => {
  const theme={
    colors: {
      heading: "#9C543A",
      text: "#9C543A",
      white: "#fff",
      black: " #212529",
      helper: "#9C543A",

      bg: "#F8F8F8",
     
      footer_bg: "	#FAF9F6",
      btn: "#9C543A",
      border: "rgba(156, 84, 58, 0.5)",
      hr: "#000000",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<FilterContextProvider> {/* Wrap your Products component with FilterContextProvider */}
      <Products />
    </FilterContextProvider>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />

          
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
