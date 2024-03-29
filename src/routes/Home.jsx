import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroImg from '../components/heroImg/HeroImg'
import Footer from '../components/footer/Footer'
import Work from '../components/work/Work.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home