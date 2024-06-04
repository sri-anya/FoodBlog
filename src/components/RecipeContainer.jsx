import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import LatestRecipeContainer from './LatestRecipeContainer'
import { RecipesContext } from '../context/recipesContext'
import FilterRecipes from './FilterRecipes'


const RecipeContainer = () => {

  const { rec, setRec } = useContext(RecipesContext);
  const [selectedRecipes, setSelectedRecipes] = useState([])

  useEffect(() => {
    // Update selectedRecipes whenever recipes change
    setSelectedRecipes(rec);
  }, [rec]);

  function handleSearch(searchText) {
    const filteredRecipes = rec.filter((recipe) => recipe.title.toLowerCase().includes(searchText.toLowerCase()))
    setSelectedRecipes(filteredRecipes)
  }


  return (
    <div>
      <Navbar />
      <Subsection image="/cookware.svg" message="All Recipes" />
      <FilterRecipes onSearch={handleSearch} />
      {(rec).length > 0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={selectedRecipes} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default RecipeContainer
