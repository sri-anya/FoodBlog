import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate();
    return (

        <div className="container h-[400px] w-[350px] relative" onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <p className='text-white absolute top-3 z-10 left-5 text-xs'>Admin</p>
            <p className='text-white absolute top-7 z-10 left-5 text-xs'>{recipe.date_created}</p>
            <img className="w-full h-full object-cover opacity-85 rounded-md " src={recipe.keyImage} alt="" />
            <h1 className="text-white font-bold text-2xl absolute bottom-[10%] left-10 hover:text-[#7c767c] cursor-pointer text-wrap">{recipe.title}</h1>
            <div className='h-[1px] w-[85%] mx-auto bg-white relative bottom-8 z-1'></div>
        </div>



    )
}

export default RecipeCard
