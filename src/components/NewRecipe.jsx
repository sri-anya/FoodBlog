import React, { useState} from 'react';
import Divider from './Divider';
import {useOutletContext } from "react-router-dom";

function getDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date();
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month} ${date}, ${year}`;
}

const NewRecipe = () => {
    const { rec, setRec } = useOutletContext();
    const today = getDate()
    
    const [newRecipeData, setNewRecipeData] = useState({
        title: "",
        keyImage: "",
        recipe: "",
        category: "",
        date_created:today
    });
    const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newRecipeData.keyImage === "") {
            newRecipeData.keyImage = "/recipeImages/generalImage.jpg"
        }


        fetch("http://localhost:4000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeData),
        })
        .then((r) => r.json())
        .then((newRecipe) => {
            setRec([...rec, newRecipe]);
            setNewRecipeData({ title: "", keyImage: "", recipe: "", category: "" });
            setIsFormVisible(false); // Hide form upon successful submission
        });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewRecipeData({ ...newRecipeData, [name]: value });
    };

    return (
        <div>
            {isFormVisible ? (
                <form className="text-center mx-44 space-y-4 p-6 bg-white shadow-md rounded-lg" id="newRecipeForm" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h2>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-gray-700" htmlFor="title">Title:</label>
                        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" id="title" onChange={handleChange} value={newRecipeData.title} required/>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-gray-700" htmlFor="keyImage">Image:</label>
                        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="url" name="keyImage" id="keyImage" onChange={handleChange} value={newRecipeData.keyImage} placeholder="Enter the URL for image" />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-gray-700" htmlFor="recipe">Recipe:</label>
                        <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="recipe" id="recipe" cols="30" rows="10" onChange={handleChange} value={newRecipeData.recipe}></textarea>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-gray-700" htmlFor="category">Category:</label>
                        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="category" id="category" onChange={handleChange} value={newRecipeData.category} />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                    </div>
                </form>
            ) : (
                <div className="text-center mx-44 p-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Recipe submitted successfully!</h2>
                </div>
            )}

            <Divider />
        </div>
    );
};

export default NewRecipe;
