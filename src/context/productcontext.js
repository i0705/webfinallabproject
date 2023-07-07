import { createContext, useContext, useEffect } from "react";
import productsData from "./mydata";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    // console.log(productsData);
  }, []);

  return (
    <AppContext.Provider value={productsData}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
