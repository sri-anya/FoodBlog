import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import LatestRecipeContainer from './LatestRecipeContainer'

const RecipeContainer = () => {

  const [recipes, setRecipes] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const fetchRecipes = async () => {
      try {
        const data = await fetch("http://localhost:4000/recipes");
        const response = await data.json();
        setRecipes(response);
        setIsLoaded(!isLoaded)

      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };


    fetchRecipes();
  }, []);


  return (
    <div>
      <Navbar />
      <Subsection image="/cookware.svg" message="All Recipes" />
      {isLoaded ? <LatestRecipeContainer recipes={recipes} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default RecipeContainer
