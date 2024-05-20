import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import Background from './Background'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import { RecipesContext } from '../context/recipesContext'

const Home = () => {
  const [recipes, setRecipes] = useState();

    useEffect(() => {
       
        const fetchRecipes = async () => {
            try {
                const data = await fetch("http://localhost:4000/recipes");
                const response = await data.json();
                setRecipes(response);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

       
        fetchRecipes();
    }, []); 
  console.log(recipes)
  return (
    <div>
      <Background />
      <Navbar />
      <Subsection image="/heart.svg" message="Food and family nourish our bodies and souls." secondMessage="Love, Sam" />
      <LatestRecipeContainer />
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default Home
