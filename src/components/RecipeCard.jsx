import React, { useState } from 'react'

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}-${date}-${year}`;
}

const RecipeCard = () => {
    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <div>
            <Date />
            <div className="container h-[500] w-[450] relative">
                <p className='text-white  absolute top-2 z-10 left-2 text-xs'>{currentDate}</p>
                <img width="450" height="500" className="object-contain opacity-85 rounded-md relative" src="/recipeImages/pancakes.jpg" alt="" />
                <h1 className="text-white font-bold text-2xl absolute bottom-[10%] left-10 hover:text-[#7c767c] cursor-pointer text-wrap">Pancakes with Maple Syrup</h1>
                <div className='h-[1px] w-[85%] mx-auto bg-white relative bottom-12 z-1'></div>
            </div>

        </div>
    )
}

export default RecipeCard
