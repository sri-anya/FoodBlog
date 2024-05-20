import React from 'react'

const RecipeCard = () => {
  return (
    <div>
        <div className="container h-[500] w-[450] relative">
            <img width = "450" height="500" className="object-contain" src="/recipeImages/pancakes.jpg" alt="" />
           
            <h1 className="text-white font-bold text-xl absolute bottom-[10%] left-10 hover:text-[#7c767c] cursor-pointer">Pancakes with Maple Syrup</h1>
            
           
           
        </div>
      
    </div>
  )
}

export default RecipeCard
