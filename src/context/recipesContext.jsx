import React, { useEffect, useState } from "react";

const RecipesContext = React.createContext();

function RecipesProvider({ children }) {
  
  
    const [recipes, setRecipes] = useState();

    useEffect(() => {
       
        const fetchRecipes = async () => {
            try {
                const data = await fetch("http://localhost:4000/recipes");
                const response = await data.json();
                setRecipes(response);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

       
        fetchRecipes();
    }, []); 

    return <RecipesContext.Provider value={recipes}>{children}</RecipesContext.Provider>;
}

export { RecipesContext, RecipesProvider };
