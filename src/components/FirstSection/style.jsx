import styled from "styled-components";
import bg from '../../assets/imgs/fill.png'
import { medium,tablet,mobile } from "../../responsive/responsive";
export const Containter = styled.div`
  background-color:#FEF5F5;
  overflow:hidden ;
  padding:4em 4em;
  ${mobile({padding:'2em 2em 1em 2em'})};

`
export const Flex = styled.div`
  display:flex ;
  flex-wrap:wrap ;
  justify-content:space-between ;
  ${medium({justifyContent:"center",gap:'20px'})};

`
export const Heading = styled.h2`
  text-align:center;
  font-size:2.4rem;
  ${mobile({fontSize:'1.7rem'})};
`
export const Card = styled.div`
  width:20rem ;
  text-align:center ;
  background-color:#fff;
  padding:1.5em ;
  cursor: pointer;
`

export const Image = styled.img`
   width:120px ;
   height:130px ;
`

export const Desc = styled.p`
  font-size:0.9rem ;
  color:#333 ;
`

export const  Title = styled.h3`
  font-size:1.5rem ;
`
