import React from 'react'

const CategoryFilter = ({onCategoryFilter}) => {
    const categories = ["All Recipes", "Indian", "Mexican", "Asian", "Dessert"]

    return (
        <div>
            <div className="categories flex  gap-10   ">
            {
                categories.map((category)=><div key={category} className=" hover:text-[#FDE047] cursor-pointer" onClick={()=>onCategoryFilter(category)} name={category}>{category}</div>)
            }
               
            </div>

        </div>
    )
}

export default CategoryFilter
