import React from 'react'
import { Column, Container ,Title,Desc,Button,Image } from './style'
import Chef from '../../assets/imgs/chef.png'
const ThirdSection = () => {
  return (
    <Container>
        
        <Column>
           <Title>
             Sit at Home We Will Take Care Your Order
           </Title>
           <Desc>
           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
            </Desc>
           <Button to='/food'>
              Start Ordering
           </Button>
        </Column>

        <Column data-aos='fade-left' data-aos-duration='1000'>
           <Image src={Chef} alt='Burger'/>
        </Column>
    </Container>
  )
}

export default ThirdSection