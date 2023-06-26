import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet, mobile } from "../../responsive/responsive";

export const Container = styled.div`
  overflow:hidden ;
  padding:0em 4em ;
  display:flex ;
  flex-wrap:wrap ;
  align-items:center;
  gap:1.5em;
  ${tablet({padding:"0em 2em 0em 2em"})};
  justify-content:space-between ;

`

export const Column  = styled.div`
  width:48% ;
  padding-left:1em ;
  ${mobile({width:'100%',paddingLeft:'0'})};
`

export const Title  = styled.h3`
  font-size:2.5rem ;
  line-height:1.3 ;
  ${tablet({fontSize:"1.7rem"})};
`

export const Image  = styled.img`
  min-height:500px ;
`

export const Desc  = styled.p`
  word-wrap:break-word ;
  
${tablet({fontSize:"0.9rem"})};
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
  
${tablet({fontSize:"0.9rem"})};

`