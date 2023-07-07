import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import styled from "styled-components";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./helpers/FormatPrice";
import {MdOutlineDeliveryDining} from "react-icons/md";
import{BsCash} from "react-icons/bs"
import {GiCakeSlice} from "react-icons/gi";
import{GiPartyPopper} from "react-icons/gi";
import AddtoCart from "./components/AddtoCart";
const SingleProduct = () => {
  const { id } = useParams();
  const productsData = useProductContext();

  useEffect(() => {
    // console.log(productsData);
  }, []);

  const singleProduct = productsData.find((product) => product.id === parseInt(id));
  const {id:alias, name,price,description,image,stock,category } = singleProduct;
  console.log(singleProduct);

  if (!singleProduct) {
    return <h1>Product not found</h1>;
  }

 

else{
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
      <div className="grid grid-two-column">
        <div className="product_images">
            <MyImage imgs={image} category={category}/>
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            {/* <p>{stars}</p>
            <p>{reviews} reviews</p> */}
            <p className="product-data-price">
              Original Price:
              <del>
                <FormatPrice price={price + 50} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              After Discount: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <MdOutlineDeliveryDining className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <BsCash className="warranty-icon" />
                <p>Cash On Delivery</p>
              </div>
              <div className="product-warranty-data">
                <GiCakeSlice className="warranty-icon" />
                <p>Delicious Cakes </p>
              </div>

              <div className="product-warranty-data">
                <GiPartyPopper className="warranty-icon" />
                <p>Party Supplies </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              
              <p>
                Category :<span> {category} </span>
              </p>
            </div>
            <hr />
            
            {stock > 0 && <AddtoCart product={singleProduct} />}
      </div>
      </div>
      
      </Container>
    </Wrapper>
  );
}
 
};














const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
