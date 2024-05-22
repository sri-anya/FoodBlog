import React, { useState, useContext } from 'react'
import Divider from './Divider'
import { RecipesContext } from '../context/recipesContext'

const NewRecipe = () => {

    const recipes = useContext(RecipesContext);

    const [newRecipeData, setNewRecipeData] = useState({
        title: "",
        image: "",
        recipe: "",
        category: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newRecipeData)
        // const newRecipe = {
        //     title: newRecipeData.title,
        //     image: newRecipeData.image,
        //     recipe: newRecipeData.recipe,
        //     category: newRecipeData.category
        // }
        fetch("http://localhost:4000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeData),
        })
            .then((r) => r.json())
            .then((newRecipe) => {recipes.setRec([...recipes.rec, newRecipe]),
                document.getElementById("newRecipeForm").reset()
            });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewRecipeData({ ...newRecipeData, [name]: value })


    }

    return (
        <div>
            <form className=" text-center mx-44 space-y-4 p-6 bg-white shadow-md rounded-lg" id="newRecipeForm" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h2>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700" htmlFor="title">Title:</label>
                    <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" id="title" onChange={handleChange} value={newRecipeData.title}/>
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700" htmlFor="image">Image:</label>
                    <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="url" name="image" id="image" onChange={handleChange} value={newRecipeData.image} placeholder="Enter the URL for image" />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700" htmlFor="recipe">Recipe:</label>
                    <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="recipe" id="recipe" cols="30" rows="10" onChange={handleChange} value={newRecipeData.recipe}></textarea>
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700" htmlFor="category">Category:</label>
                    <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="category" id="category" onChange={handleChange} value={newRecipeData.category}/>
                </div>

                <div className="flex justify-end">
                    <button type='submit' className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                </div>
            </form>


            <Divider />
        </div>
    )
}

export default NewRecipe
