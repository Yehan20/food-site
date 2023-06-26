import { Link } from "react-router-dom";
import styled from "styled-components";
import {tablet,mobile} from '../../responsive/responsive'


export const Container  = styled.div`
  padding:3em 4em 3em 4em ;
  display:flex ;
  flex-wrap:wrap ;
  align-items:center;
  gap:1.5em;
  justify-content:space-between ;
  background-color:#FEF5F5 ;
  ${tablet({padding:"2em 2em 2em 2em"})};

`
export const InputContainer = styled.div`
  display:flex ;
  gap:1em;
  margin-top:3em ;

`
export const Input = styled.input`
  border:0;
  outline:0 ;
  border-radius:12px ;
  padding:1em 1em ;
  min-width: 100px;
  font-family:'Poppins',sans-serif ;
`

export const Column  = styled.div`
  width:48% ;
  padding-left:0em ;
  ${mobile({width:'100%',paddingLeft:'0'})};
`

export const Title  = styled.h3`
  font-size:2.5rem ;
  line-height:1.3 ;
  color:#333;

  ${tablet({fontSize:"1.7rem"})};
`

export const Image  = styled.img``

export const Desc  = styled.p`
  word-wrap:break-word ;
`

export const Button = styled.button`
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
  ${tablet({fontSize:"0.9rem",padding:'0.7em 1em'})};

`