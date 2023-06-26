import React, { useEffect } from 'react'
import styled from 'styled-components'
import {FaPlus,FaMinus} from 'react-icons/fa'
import foods from '../../data/food';
import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tablet,mobile } from '../../responsive/responsive';
const Container= styled.div`
 display:flex ;
 padding:2em 4em ;
 align-items:center ;
 gap:1em;
 ${tablet({flexDirection:"column",padding:'2em 2em'})};
`
const Column = styled.div`
 width:100% ;
 font-family:'Poppins',sans-serif ;
 display:flex ;
 flex-direction:column ;
 gap:1em;

`
const Img = styled.img`
  width:100% ;
  max-width:500px ;
  ${tablet({maxWidth:"100%"})};
`
const Title = styled.h2`

  font-size:2.5rem ;
  font-weight:600 ;
  margin-bottom:0 ;
  ${tablet({margin:"0"})};
`
const Desc= styled.p`
  line-height:1.7;
  margin:0 ;
`
const Amount =styled.input`
   max-width:130px;
   text-align:center ;
   outline:0 ;
   border:0 ;
   ${mobile({ maxWidth:"70px",padding:'0'})};
   font-family:'Poppins',sans-serif ;
   font-size:1rem ;
   &::-webkit-inner-spin-button,
   &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
}

  -moz-appearance: textfield;

`
const Price =styled.h3`margin:0;`
const Label = styled.span``
const AmountContainer = styled.div`
  display:flex ;
  outline:1px solid #ccc ;
  padding:0.5em ;
 
`
const Button = styled.button`
  display:inline-block ;
  padding:0.7em 3.5em ;
  background-color:#F86061;
  border:0 ;
  cursor: pointer;
  font-family:'Poppins',sans-serif ;
  color:#fff;
  border-radius:12px ;
  text-decoration:none ;
  &:hover{
     opacity:0.8 ;
  }
`
const Flex = styled.div`display:flex;  gap:0.5em;`
const CartButton=styled.button`
  background-color:transparent ;
  border:0 ;

`



const SingleFood = () => {
  const [food,setFood] = useState('');
  const [amount,setAmount] = useState(0);
  const {id} = useParams();



  useEffect(()=>{
    let foodItem = foods.find((food)=>food.id===Number(id))
    setFood(foodItem)
    // console.log(foodItem);
    scroll.scrollToTop({
        duration: 150, // Specify the duration in milliseconds (e.g., 250ms)
        smooth: true, 
    })

  },[])

  return (
    <>
      {food && <Container data-aos='fade-up' data-aos-duration='2000'>
        <Column>
          <Img src={food.src} alt={food.name}/>
        </Column>
        <Column>
           <Title>{food.name}</Title>
           <Desc>{food.desc}</Desc>
           <Price>${food.price}</Price>
           <Label>Amount</Label>
           <Flex>
           <AmountContainer>
             <CartButton onClick={()=>setAmount((prev)=>prev-1)}>
                <FaMinus/> 
             </CartButton>  
             <Amount type={'number'} min='0' value={amount}/>
             <CartButton onClick={()=>setAmount((prev)=>prev+1)}>
                <FaPlus/>   
            </CartButton>  
            </AmountContainer>
            <Button>Order</Button>
           </Flex>
  
        </Column>
      </Container>
    }
    </>


  )
}

export default SingleFood