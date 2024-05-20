import React from 'react'
import Navbar from './Navbar'
import Subsection from './Subsection'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import RecipeCard from './RecipeCard'

const RecipeContainer = () => {
  return (
    <div>
      <Navbar/>
      <Subsection image="/cookware.svg" message="About Me"/>
      <main className='flex flex-wrap mx-10 gap-20 justify-evenly p-10'>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>

      </main>
      <SubscriptionForm/>
      <Footer/>
    </div>
  )
}

export default RecipeContainer
