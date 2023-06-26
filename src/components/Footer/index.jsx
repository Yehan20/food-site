import React from 'react'
import { Coloumn, Container, Desc, Image, List, ListItem, Title } from './style'
import Logo from '../../assets/imgs/logo.png'
const Footer = () => {
  return (
     <Container data-aos='fade-up' data-aos-duration='2000'>
          <Coloumn>
            <Image src={Logo}/>
             <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur ea animi. Assumenda repudiandae enim quis itaque pariatur odit velit veniam! Aut at rem sed aliquid qui itaque quasi error.</Desc>
          </Coloumn>

          <Coloumn>
             <Title left='40px'>Company</Title>
             <List>
                <ListItem>About Us</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Location</ListItem>
             </List>
          </Coloumn>

          <Coloumn>
             <Title left='40px'>Services</Title>
             <List>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wish List</ListItem>
                <ListItem>My Account</ListItem>
             </List>
          </Coloumn>

          <Coloumn>
             <Title>Get In Touch</Title>
             <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam, totam laudantium vel labore perspiciatis temporibus quo adipisci cum 
             </Desc>
          </Coloumn>

     </Container>
  )
}

export default Footer