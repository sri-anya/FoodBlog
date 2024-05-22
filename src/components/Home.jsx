import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import Background from './Background'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import { RecipesContext } from '../context/recipesContext'
import NewRecipe from './NewRecipe'


const Home = () => {

  const recipes = useContext(RecipesContext);

  return (
    <div>
      <Background />
      <Navbar />
      <Subsection image="/heart.svg" message="Food and family nourish our bodies and souls." secondMessage="Love, Sam" />
      <NewRecipe />
      {(recipes.rec).length > 0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={recipes.rec.slice(-6)} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default Home
