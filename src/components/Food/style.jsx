import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from '../../responsive/responsive'

export const HoverBox=styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  ${mobile({ height:"200px",padding:'0'})};
  width: 90%;
  height: 70%;
  top: 0;
  border-radius:0;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  a{
      color:#fff;
      text-decoration:none ;
      &:hover{
          color:#E53536;
      }
  }
  transition:all 550ms ease-in ;
  opacity:0 ;
`

export const Card = styled.div`
  padding:2em;
  max-width:25rem ;
  width:100% ;
  text-align:center ;
  position:relative ;
  &:hover ${HoverBox}{
     opacity:1 ;
  }
  cursor: pointer;
  /* max-width:100% ; */
`

export const View = styled(Link)`
 
`
export const Flex = styled.div`
  display:flex ;
`
export const Desc = styled.p`

`
export const Image = styled.img`
  width:100% ;
  border-radius:300px ;
  height:250px ;
  ${mobile({  height:"150px",padding:'0'})};
  
`
export const Price = styled.span`

`

export const Dark = styled.span`

`

export const Title = styled.h2``