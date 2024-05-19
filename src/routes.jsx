import Contact from "./components/Contact";
import Home from "./components/Home";
import ErrorPage from './components/ErrorPage';

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
    },


]

export default routes