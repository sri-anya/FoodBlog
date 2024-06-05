import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SubscriptionForm from './components/SubscriptionForm'
import Background from './components/Background'
import Footer from './components/Footer'


function App() {

  const [rec, setRec] = useState([])


  useEffect(() => {

    const fetchRecipes = async () => {
      try {
        const data = await fetch("http://localhost:4000/recipes");
        const response = await data.json();
        setRec(response);

      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);


  return (
    <>
      <Background />
      <Navbar />
      <Outlet context={{rec, setRec}}/>
      <SubscriptionForm />
      <Footer />

    </>
  )
}

export default App
