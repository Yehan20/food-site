import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        box-sizing:border-box ;
    }
   html{
    scroll-behavior:smooth;
   }
   body{
    margin:0 ;
    font-family:'Poppins',sans-serif;
   }

   img{
    max-width:100%;
   }
   .active{
    color:#F86061;
   }


`