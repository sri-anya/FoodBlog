import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

    const [liked, setLiked] = useState(false)

    const navigate = useNavigate();
    return (
        <div className="container h-[400px] w-[350px] relative" >
            <p className='text-white absolute top-3 z-10 left-6 text-xs'>Admin</p>
            <p className='text-white absolute top-7 z-10 left-6 text-xs'>{recipe.date_created}</p>
            <img className="w-full h-full object-cover opacity-85 rounded-md " src={recipe.keyImage} alt="recipeImage" />
            <h1 className="text-white font-bold text-2xl absolute bottom-[10%] left-10 hover:text-[#7c767c] cursor-pointer text-wrap"  onClick={() => navigate(`/recipe/${recipe.id}`)}>{recipe.title}</h1>
            <div className='h-[1px] w-[85%] mx-auto bg-white relative bottom-9 z-1'></div>
            <p className="text-white absolute bottom-3 z-10 left-6 text-xs">{recipe.category}</p>
            {liked ? <button className="text-white absolute bottom-2 z-10 right-6 text-xs" onClick={()=>setLiked(!liked)}><img src="/heart.svg" alt="heartFilled" /></button> :
            <button className="text-white absolute bottom-2 z-10 right-6 text-xs" onClick={()=>setLiked(!liked)}><img src="/empty_heart.svg" alt="emptyHeart" /></button>}
        </div>
    )
}

export default RecipeCard
