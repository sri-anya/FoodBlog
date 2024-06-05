import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Divider from './Divider'

const SingleRecipe = () => {

    const [recipe, setRecipe] = useState({})
    const params = useParams()
    const recipeId = params.id;

    useEffect(() =>{
        fetch(`http://localhost:4000/recipes/${recipeId}`)
        .then(r => r.json())
        .then(data => setRecipe(data))
        .catch(error => console.error(error));
      }, [recipeId]);

      if(!recipe.title){
        return <h1>Loading...</h1>;
      };

    return (
        
        <div>
            
            <main>
                <div className="container min-h-96  w-[69vw] mx-auto my-28  border-gray-800 border-[1px] p-10">
                    <h1 className='font-bold text-center text-3xl'>{recipe.title}</h1>
                    <img className="mx-auto m-10" width="800" height="550" src={recipe.keyImage} alt="" />
                    <p className='py-10'>{recipe.recipe}</p>
                    <Divider/>
                    <p className='text-right pr-20 pt-7 italic'>category: {recipe.category}</p>

                </div>
            </main>

        </div>
    )
}

export default SingleRecipe
