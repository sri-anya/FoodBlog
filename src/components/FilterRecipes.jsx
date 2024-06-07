import React, {useState} from "react";

const FilterRecipes = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')


    return (
        <>
   
      <div className="flex flex-col items-center p-4  rounded-lg ">
        {/* <h1 className="text-lg font-bold mb-4 ">Find Your Perfect Recipe</h1> */}
        <form className="w-full max-w-sm flex">
          <input 
            className=" border-b-2 border-gray-300 p-2 w-full"
            type="text" 
            name="recipe" 
            placeholder="Search for a recipe..."
            onChange={(e) => {onSearch(e.target.value); setSearchValue(e.target.value)}} 
            value={searchValue}
          />
          <img src="/searchIcon.svg" alt="search icon" />
        </form>
      </div>
      </>
        
    );
  };

export default FilterRecipes;