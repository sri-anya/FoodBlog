import React, { useState, useEffect} from 'react'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import FilterRecipes from './FilterRecipes'
import { useOutletContext } from "react-router-dom";


const RecipeContainer = () => {

  const [selectedRecipes, setSelectedRecipes] = useState([])
  const { rec, setRec } = useOutletContext();
  
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
      
      <Subsection image="/cookware.svg" message="All Recipes" />
      <FilterRecipes onSearch={handleSearch} />
      {(rec).length > 0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={selectedRecipes} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      
    </div>
  )
}

export default RecipeContainer
