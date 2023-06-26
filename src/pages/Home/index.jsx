import React from 'react'
import Banner  from '../../components/Banner'
import FirstSection from '../../components/FirstSection'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NewsLetter from '../../components/NewsLetter'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'

const Home = () => {
  return (
     <>

       <Banner />
       <FirstSection/>
       <SecondSection/>
       <ThirdSection/>
       <NewsLetter/>

     </>
  )
}

export default Home