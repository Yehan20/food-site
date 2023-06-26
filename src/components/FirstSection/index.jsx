import React from 'react'
import { Containter,Card,Image,Title,Desc,Flex, Heading} from './style'
import CardImg1 from '../../assets/imgs/pay.png'
import CardImg2 from '../../assets/imgs/deliver.png'
import CardImg3 from '../../assets/imgs/securer.png'
const FirstSection = () => {
  return (
    <Containter data-aos='fade-up' data-aos-duration='1000'>
        <Heading>Order Healthy And Fresh Food <br /> Any Time</Heading>
        <Flex>
         <Card>
            <Image src={CardImg1}/>
            <Title>Free Transport Cost</Title>
            <Desc>
              Enjoy Order in a hand using the fresness of groceries
            </Desc>
        </Card>

        <Card>
            <Image src={CardImg2}/>
            <Title>30min garuntee</Title>
            <Desc>
               if order takes more than 30 mins its free
            </Desc>
        </Card>

            <Card>
                <Image src={CardImg3}/>
                <Title>Secure checkout</Title>
                <Desc>
                All payment is 100% safe 
                </Desc>
            </Card>
        </Flex>
    </Containter>
  )
}

export default FirstSection