import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {mobile,ios} from '../../responsive/responsive'
export const Container = styled.div`
  display:flex ;
  background-color:#000 ;
  padding:1em 4em ;
  ${mobile({flexDirection:'column',padding:'1em 2em'})};
`
export const ContainerTwo= styled.div`
  display:flex ;
  justify-content:space-between ;
  align-items:center ;
`

export const Nav = styled.nav`
  margin:0 auto ;
  ${mobile({display:'none'})}
`
export const Toggle = styled.button`
   background-color:transparent ;
   cursor: pointer;
   border:0;
   display:none ;
   ${mobile({display:'block'})}

`
export const List = styled.ul`
  list-style:none ;
  display:flex ;
  gap:2.5em;
  ${mobile({flexDirection:'column',alignItems:'center',padding:'1em 2em'})};
`
export const ListItem = styled.li``
export const ListLink = styled(NavLink)`
  color:#fff;
  text-decoration:none ;
  &:hover{
    color:#E53536
  }
`
export const Image = styled.img`
  width:50px ;
`