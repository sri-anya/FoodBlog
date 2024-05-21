import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import './index.css'
import { RecipesContext, RecipesProvider } from './context/recipesContext.jsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecipesProvider>
        <RouterProvider router={router} />
    </RecipesProvider>
    
  
)
