import React from 'react'
import { Column, Container ,Title,Desc,Button,Image } from './style'
import burger from '../../assets/imgs/burger.png'
const SecondSection = () => {
  return (
    <Container>

        <Column data-aos='fade-right' data-aos-duration='1000'>
           <Image src={burger} alt='Burger'/>
        </Column>

        <Column >
           <Title>
              Find Favorites and <br /> Discover New Ones
           </Title>
           <Desc>
           At vero eos et accusamus et iusto odio dignissimos <br /> ducimus blanditiis praesen voluptatum deleniti.
           </Desc>
           <Button to='/foods'>
              Order Now
           </Button>
        </Column>
    </Container>
  )
}

export default SecondSection