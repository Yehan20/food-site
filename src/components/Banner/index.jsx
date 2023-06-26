import React from 'react'
import { Button, Caption, Container, Desc, Title } from './style'

const Banner = () => {
  return (
    <Container data-aos='fade-up' data-aos-duration='1000'>
        <Caption>
            <Title>Food delivered in as little as 30 minutes</Title>
            <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente nobis dolorum. Reiciendis
            </Desc>
            <Button to={'/foods'}>
            Order Now
            </Button>
        </Caption>
    </Container>
  )
}

export default Banner
