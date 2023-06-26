import styled from "styled-components";
import {tablet} from '../../responsive/responsive'
export const Container = styled.div`
  background-color:#000;
  display:flex ;
  padding:2em 4em ;
  color:#fff;
  
  ${tablet({padding:"2em 2em",flexDirection:'column'})};
`
export const Title = styled.h3`
  padding-left:${props=>props.left?props.left:''} ;
  ${tablet({paddingLeft:"0"})};
`
export const Desc = styled.p``
export const Coloumn = styled.div`
  width:100% ;
  flex-grow:1 ;
`

export const List = styled.ul`
  list-style:none ;
  ${tablet({paddingLeft:"0"})};

`
export const ListItem = styled.li`
  margin-bottom:1em ;
`


export const Image = styled.img`
  width:50px ;
`