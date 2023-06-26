import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from '../../assets/imgs/banner.png'
import {mobile,tablet,ios} from '../../responsive/responsive'
export const Container = styled.div`
   padding-top:5em ;
   padding-left:4em ;
   padding-right:4em ;
   background-image:url(${Banner});
   background-position:center ;
  ${mobile({padding:'2em 2em 1em 2em'})};
  ${tablet({padding:'2em 2em 1em 2em'})};
  

`

export const Caption = styled.div`
  padding-bottom:15em ;
  ${tablet({paddingBottom:'2em'})};
  max-width:450px ;
`

export const Title = styled.h1`
  color:#F86061;
  font-size:3rem ;
  line-height:1.1 ;
  ${mobile({fontSize:'2.3rem'})};
  ${ios({fontSize:"1.8rem",padding:'0'})};
  
`

export const Desc = styled.p`
  color:#fff ;
  line-height:1.7 ;
  font-size:1.1rem ;
`

export const Button = styled(Link)`
  display:inline-block ;
  padding:0.7em 2em ;
  background-color:#F86061;
  color:#fff;
  border-radius:12px ;
  margin-top:2em ;
  text-decoration:none ;
  &:hover{
     opacity:0.8 ;
  }
`