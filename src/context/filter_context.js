import { createContext, useContext, useEffect, useState } from "react";
import { useProductContext } from "./productcontext";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const productsData = useProductContext();
  const [filter_products, setFilterProducts] = useState([]);
  const [all_products, setAllProducts] = useState([]);
  const [grid_view, setGridView] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const filteredProducts = productsData.filter((product) => {
      if (selectedCategory === "All") {
        return true; // Show all products when "All" category is selected
      } else {
        return product.category === selectedCategory;
      }
    });

    setFilterProducts(filteredProducts);
    setFilterProducts(productsData);
    setAllProducts(productsData);
  }, [productsData, grid_view]);

  const setListView = () => {
    setGridView(false);
  };

  const sorting = (event) => {
    const sortOption = event.target.value;

    // Create a copy of the filter_products array
    const sortedProducts = [...filter_products];

    switch (sortOption) {
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilterProducts(sortedProducts);
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchValue(inputValue);

    const filteredProducts = all_products.filter((product) =>
      product.name.toLowerCase().includes(inputValue)
    );

    setFilterProducts(filteredProducts);
  };
  const updateFilterValue = (category) => {
    setSelectedCategory(category); 
    // Call a function to update the filtered products based on the selected category
    // For example, you can define a function setFilteredProducts in the filter_context and call it here
    setFilterProducts(category);
  };

  return (
    <FilterContext.Provider
      value={{
        filter_products,
        setFilterProducts,
        all_products,
        grid_view,
        setGridView,
        setListView,
        sorting,
        searchValue,
        handleSearchInputChange,
        selectedCategory,
        setSelectedCategory,updateFilterValue
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};