import React from 'react'
import SingleProduct from '../SingleProduct'
import styled from 'styled-components'
const MyImage = ({imgs}) => {

  return(
    <Wrapper>
         <div className="main-screen">
        <img src={imgs} alt={"loading"} />
      </div>
    </Wrapper>
  )
    
  
};
const Wrapper = styled.section`
 
   
    img {
      max-width: 90%;
      max-height: 90%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  
  
 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;