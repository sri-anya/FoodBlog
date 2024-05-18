import React from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-screen w-full'></div>
        <SubscriptionForm/>
        <Footer/>
    </div>
  )
}

export default Home
