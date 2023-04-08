import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Services from '../Components/Services/Services';
import Trusted from '../Components/Trusted/Trusted';


const title = 'My E-Store'





function Home() {
  return (
    <>
    <HeroSection  title={title} />
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home