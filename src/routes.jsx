import Contact from "./components/Contact";
import Home from "./components/Home";
import ErrorPage from './components/ErrorPage';
import About from "./components/About";
import RecipeContainer from "./components/RecipeContainer";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/recipe-container",
        element: <RecipeContainer />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about-me",
        element: <About />,
        errorElement: <ErrorPage />
    },
    

]

export default routes