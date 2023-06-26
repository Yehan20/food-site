import React from 'react'
import { Card,Image,Title,Desc,Price,Dark ,HoverBox,View} from './style'

const Food = ({food}) => {
  return (
    <Card data-aos='fade-up' data-aos-duration='2000'>
        <Image src={food.src} alt={food.name}/>
        <Title>{food.name}</Title>
        <Desc>Price <Dark>{food.price}</Dark></Desc>
        <HoverBox>
           <View to={`/foods/food/${food.id}`}>More Info</View>
        </HoverBox> 
    </Card>
  )
}

export default Food