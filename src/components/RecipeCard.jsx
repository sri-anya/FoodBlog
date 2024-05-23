import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}-${date}-${year}`;
}

const RecipeCard = ({ recipe }) => {
    const [currentDate, setCurrentDate] = useState(getDate());
    console.log(recipe)
    if (recipe.keyImage === "") {
        console.log(recipe)
        recipe.keyImage = "/recipeImages/generalImage.jpg"
    }
    const navigate = useNavigate();
    return (

        <div className="container h-[400px] w-[350px] relative" onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <p className='text-white absolute top-2 z-10 left-2 text-xs'>{currentDate}</p>
            <img className="w-full h-full object-cover opacity-85 rounded-md " src={recipe.keyImage} alt="" />
            <h1 className="text-white font-bold text-2xl absolute bottom-[10%] left-10 hover:text-[#7c767c] cursor-pointer text-wrap">{recipe.title}</h1>
            <div className='h-[1px] w-[85%] mx-auto bg-white relative bottom-8 z-1'></div>
        </div>



    )
}

export default RecipeCard
