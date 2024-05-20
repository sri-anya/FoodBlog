import React from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'

const RecipeContainer = () => {
  return (
    <div>
      <Navbar/>
      <Subsection image="/cookware.svg" message="About Me"/>
      <SubscriptionForm/>
      <Footer/>
    </div>
  )
}

export default RecipeContainer
