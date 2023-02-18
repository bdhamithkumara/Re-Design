import React from 'react'
import Navbar from './NavBar';
import Middle from './Middle';
import Footer from './Footer';


const Home = () => {
  return (
    <div className='max-lg:[1440px] min-w-[280px] max-2xl:[1440px] 2xl:mx-16 overflow-hidden'>
    <Navbar />
    <Middle />
    <div className='mt-[-40px] md:mt-0'><Footer /></div>
  </div>
  )
}

export default Home