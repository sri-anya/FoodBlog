import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import './index.css'
import {  RecipesProvider } from './context/recipesContext.jsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecipesProvider>
        <RouterProvider router={router} />
    </RecipesProvider>
)
