import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
// import { FaSearch} from "react-icons/fa";

const FilterSection = () => {
  const { filter_products, all_products, setFilterProducts, searchValue, handleSearchInputChange, updateFilterValue, selectedCategory,setSelectedCategory } = useFilterContext();
  const [filteredProducts, setFilteredProducts] = useState(filter_products);
// console.log(all_products)
  useEffect(() => {
    setFilteredProducts(filter_products);
  }, [filter_products]);

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  
    if (category.toLowerCase() === "all") {
      console.log("All Products:", all_products);
      setFilteredProducts(all_products);
    } else {
      const filtered = all_products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtered Products:", filtered);
      setFilteredProducts(filtered);
    }
  };

  
  
  
  

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              className={curElem === selectedCategory ? "active" : ""}
              onClick={() => handleCategoryClick(curElem)}
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;