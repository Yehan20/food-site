import {css} from 'styled-components'

export const mobile = (props)=>{
     return css`
        @media screen and (max-width: 767px ){
             ${props}
        }
     ` 
}

export const ios = (props)=>{
     return css`
        @media screen and (max-width: 375px ){
             ${props}
        }
     ` 
}

export const tablet = (props)=>{
     return css`
        @media screen and (max-width: 992px ){
             ${props}
        }
     ` 
}

export const medium = (props)=>{
    return css`
       @media screen and (max-width: 1199px ){
            ${props}
       }
    ` 
}
