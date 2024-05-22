import React, { useEffect, useState, createContext } from "react";

const RecipesContext = createContext();



function RecipesProvider({ children }) {
    const [rec,setRec] = useState([])
    

    useEffect(() => {

        const fetchRecipes = async () => {
          try {
            const data = await fetch("http://localhost:4000/recipes");
            const response = await data.json();
            setRec(response);
            // rexe.setRec(response);
         
    
          } catch (error) {
            console.error("Error fetching recipes:", error);
          }
        };
        fetchRecipes();
      }, []);
  
    
    return <RecipesContext.Provider value={{rec,setRec}}>{children}</RecipesContext.Provider>;
}

export { RecipesContext, RecipesProvider };
