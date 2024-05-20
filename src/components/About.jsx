import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import Subsection from './Subsection';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Subsection image="/mail.svg" message="About Me"/>
      <SubscriptionForm/>
      <Footer/>
    </div>
  )
}

export default About
