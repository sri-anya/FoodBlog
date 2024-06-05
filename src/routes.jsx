import Contact from "./components/Contact";
import Home from "./components/Home";
import ErrorPage from './components/ErrorPage';
import About from "./components/About";
import RecipeContainer from "./components/RecipeContainer";
import SingleRecipe from "./components/SingleRecipe";
import App from "./App";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/",
                element: <Home />
            }, 
            {
                path: "/recipe-container",
                element: <RecipeContainer />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about-me",
                element: <About />
            },
            {
                path: "/recipe/:id",
                element: <SingleRecipe />
            }
        ]
    }
    // {
    //     path: "/",
    //     element: <Home />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/recipe-container",
    //     element: <RecipeContainer />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/about-me",
    //     element: <About />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/recipe/:id",
    //     element: <SingleRecipe />,
    //     errorElement: <ErrorPage />
    // },
    

]

export default routes