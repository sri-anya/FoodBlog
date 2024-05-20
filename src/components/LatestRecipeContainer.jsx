import React from 'react'
import RecipeCard from './RecipeCard'

const LatestRecipeContainer = ({ recipes }) => {
    console.log(`recipes = ${recipes}`)
    const recipeList = recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />
    })

    return (
        <div className='p-10'>
            <h1 className='text-center font-serif text-3xl font-semibold'>Latest Recipes</h1>
            <main className='flex flex-wrap mx-10  gap-20 justify-evenly p-10'>
                {recipeList}
            </main>

        </div>
    )
}

export default LatestRecipeContainer
