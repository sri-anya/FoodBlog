import React from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import Background from './Background'
import Subsection from './Subsection'
import RecipeContainer from './RecipeContainer'

const Home = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Subsection image="/heart.svg" message="Food and family nourish our bodies and souls." secondMessage="Love, Sam"/>
      {/* <div className='h-[100vh] w-full'></div> */}
      <RecipeContainer/>
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default Home
