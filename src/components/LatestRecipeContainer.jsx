import React from 'react'
import RecipeCard from './RecipeCard'

const LatestRecipeContainer = ({ heading = "", recipes }) => {
   
    const recipeList = recipes.map((recipe) => {
        return <RecipeCard key={recipe.title} recipe={recipe} />
    })

    return (
        <div className='p-10'>
            <h1 className='text-center font-serif text-3xl font-semibold'>{heading}</h1>
            <main className='flex flex-wrap mx-10  gap-20 justify-evenly p-10'>
                {recipeList}
            </main>
        </div>
    )
}

export default LatestRecipeContainer
