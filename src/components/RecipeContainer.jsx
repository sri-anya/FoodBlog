import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import LatestRecipeContainer from './LatestRecipeContainer'
import { RecipesContext } from '../context/recipesContext'

const RecipeContainer = () => {

  const recipes = useContext(RecipesContext);


  return (
    <div>
      <Navbar />
      <Subsection image="/cookware.svg" message="All Recipes" />
      {(recipes.rec).length>0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={recipes.rec} />:<h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default RecipeContainer
