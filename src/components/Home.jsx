import React, { useState} from 'react'
import Subsection from './Subsection'
import LatestRecipeContainer from './LatestRecipeContainer'
import NewRecipe from './NewRecipe'
import { useOutletContext } from "react-router-dom";


const Home = () => {

  const [showNewRecipeForm, setShowNewRecipeForm] = useState(false)
  const {rec, setRec} = useOutletContext();
  
  return (
    <div>
      <main>
      <Subsection image="/heart.svg" message="Food and family nourish our bodies and souls." secondMessage="Love, Sam" />
      <button onClick={()=>{setShowNewRecipeForm(!showNewRecipeForm)}} className="mt-20 mb-10 mx-[42vw] px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">Want to add a new recipe?</button>
      {showNewRecipeForm ? <NewRecipe />:null}
      {(rec).length > 0 ? <LatestRecipeContainer heading="Latest Recipes" recipes={rec.slice(-6).reverse()} /> : <h1 className='text-2xl font-semibold text-center p-10 animate-ping'>Loading...</h1>}
      </main>
    </div>
  )
}

export default Home
