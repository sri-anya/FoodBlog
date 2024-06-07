import React, { useState, useEffect} from 'react'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import FilterRecipes from './FilterRecipes'
import { useOutletContext } from "react-router-dom";
import CategoryFilter from './CategoryFilter';

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

  function handleCategoryFilter(selectedCategory){
    if (selectedCategory=="All Recipes"){
      setSelectedRecipes(rec)
    }
    else {
      const filteredRecipes = rec.filter((recipe) => recipe.category.toLowerCase().includes(selectedCategory.toLowerCase()))
      setSelectedRecipes(filteredRecipes)
    }
  }

  return (
    <div>
      
      <Subsection image="/cookware.svg" message="All my Recipes" />
      <div className='flex justify-around w-[80vw] mx-auto items-center pt-5'>
      <CategoryFilter onCategoryFilter={handleCategoryFilter}/>
      <FilterRecipes onSearch={handleSearch} />
      </div>
      
      {(rec).length > 0 ? <LatestRecipeContainer heading="" recipes={selectedRecipes} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      
    </div>
  )
}

export default RecipeContainer
