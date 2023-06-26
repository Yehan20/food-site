import React from 'react'
import { Column, Container ,Title,Desc,Button,Image ,Input,InputContainer} from './style'
import Girl from '../../assets/imgs/girl.png'
const NewsLetter = () => {
  return (
    <Container>
        
        <Column data-aos='fade-up' data-aos-duration='1000'>
           <Image src={Girl} alt='Girl'/>
        </Column>
        
        <Column>
           <Title>
             Subscribe to our <br /> News Letter
           </Title>
           <Desc>
           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
            </Desc>
            <InputContainer>
                <Input placeholder='Email'/>
                <Button>
                  Send
               </Button>
            </InputContainer>
        </Column>

    </Container>
  )
}

export default NewsLetter