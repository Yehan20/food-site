import React from 'react'
import foods from '../../data/food'
import Food from '../Food'
import { Container,Flex,Title } from './style'

const Foods = () => {
  return (
    <Container>
      <Title>Our Products</Title>
      <Flex>
        {foods.map((food)=>{
          return <Food key={food.id} food={food}/>
        })}
      </Flex>
    </Container>
  )
}

export default Foods