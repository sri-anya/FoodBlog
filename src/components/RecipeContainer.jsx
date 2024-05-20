import React from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import RecipeCard from './RecipeCard'

const RecipeContainer = () => {
  return (
    <div>
      <Navbar />
      <Subsection image="/cookware.svg" message="All Recipes" />

      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default RecipeContainer
