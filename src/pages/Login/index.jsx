import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../../responsive/responsive'
// import Bg from '../assets/images/login.jpg'


const Form = styled.form`padding-bottom:1em;  margin:0em auto; width:100%; max-width:550px; font-family:'poppins',sans-serif;`

const Container = styled.div`
padding:1em 5em; display:flex; 
flex-direction:column; 
background-color:#FFFAFA;
${mobile({ padding:"1em 2em"})};
`

const InputContainer = styled.div``

const Input = styled.input`display:block; border:1px solid #ccc; &:focus{
    outline:0 ; border:1px solid #ccc;
} padding:1em 1em; margin-top:1em; margin-bottom:0.5em; width:100%; border-radius:12px;`

const Label = styled.label` `

const Button = styled.button`display:inline-block; width:100%; font-family:'Poppins',sans-serif; color:#fff; border-radius:12px; padding:0.75em 1em;
 margin-top:1.5em; border:0; background-color:#F86061; cursor: pointer; &:hover{
     opacity:0.7 ;
 }`
 

const Title = styled.h2`text-align:center; font-family:'Poppins',sans-serif;`

const Error = styled.div``

const Desc = styled.p`
  text-align:center ;
  margin:0 ;
  color:#000;
  a{
    color:#F86061;
  }
`


const Login = () => {

  return (
     <Container data-aos='fade-up' data-aos-duration='2000'>
        <Title>Login </Title>
        <Form>
            <InputContainer>
              <Label>Username</Label>
              <Input/>
            </InputContainer>

            <InputContainer>
              <Label>Password</Label>
              <Input/>
            </InputContainer>  

            <Button type='submit'>Login</Button>   
        </Form>
        <Desc>Not a user Click <Link to='/register'>here</Link> to make one</Desc>
     </Container>
  )
}

export default Login