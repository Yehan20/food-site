import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
  padding:5em 3em ;
  text-align:center ;
  h2{
    font-size:2rem ;
  }
  p{
    font-size:1.3rem ;
  }
  a{
    color:red;
    text-decoration:none ;
  }
`
const Error = () => {
  return (
    <Container>
        <h2>Sorry this Page Cannot be found </h2>
        <p><Link to={'/'}>Go Home</Link></p>
    </Container>
  )
}

export default Error