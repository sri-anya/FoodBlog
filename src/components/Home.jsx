import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import Background from './Background'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import { RecipesContext } from '../context/recipesContext'
import NewRecipe from './NewRecipe'
import Divider from './Divider'


const Home = () => {

  const [showNewRecipeForm, setShowNewRecipeForm] = useState(false)

  const recipes = useContext(RecipesContext);
  console.log(recipes)

  return (
    <div>
      <Background />
      <Navbar />
      <Subsection image="/heart.svg" message="Food and family nourish our bodies and souls." secondMessage="Love, Sam" />
      <button onClick={()=>{setShowNewRecipeForm(!showNewRecipeForm)}} className="mt-20 mb-10 mx-[42vw] px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">Want to add a new recipe?</button>
      {showNewRecipeForm ? <NewRecipe />:null}
      
      {(recipes.rec).length > 0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={recipes.rec.slice(-6)} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default Home
