import React from 'react'
import { Container, Image,Nav,List,ListItem,ListLink,Toggle,ContainerTwo } from './style'
import Logo from '../../assets/imgs/logo.png'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect } from 'react'
const Header = () => {
  const[show,setShow] = useState(false);
  window.addEventListener('resize',()=>{
    if(window.innerWidth>767){
        setShow(true)
    };     
  })
  useEffect(()=>{
    if(window.innerWidth>767){
        setShow(true)
    };  
  },[])

  return (
     <Container>
        <ContainerTwo>
            <Image src={Logo} alt='Logo'/>
            <Toggle onClick={()=>setShow(!show)}>
             {show?<AiOutlineClose size={'24px'}  color='white'/> :<FaBars  size={'24px'} color='white'/>}
            </Toggle>
        </ContainerTwo>
        <Nav style={{display:`${show?'block':'none'}`}}>
            <List>
                <ListItem>
                    <ListLink to='/'>Home</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink to='/foods'>Food</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink to='/login'>Login</ListLink>
                </ListItem>
                <ListItem>
                    <ListLink to='/register'>Register</ListLink>
                </ListItem>
            </List>
        </Nav>
     </Container>
  )
}

export default Header