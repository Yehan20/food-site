import styled from "styled-components";
import {tablet} from '../../responsive/responsive';
export const Container = styled.div`
   padding:2em 4em ;
`

export const Flex = styled.div`
  display:flex ;
  justify-content:space-between ;
  flex-wrap:wrap ;
  ${tablet({justifyContent:"center",gap:'1em'})};
`

export const Title = styled.h2`
  text-align:center ;
`