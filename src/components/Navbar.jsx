import React from 'react'
import Divider from './Divider'

const Navbar = () => {
    return (
        <>
            <div className='Header flex justify-evenly items-center py-8'>
                <div className="logo text-3xl">Sam's Food</div>
                <div className="options">
                    <ul className='flex gap-8'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>All Recipes</li>
                        <li className='cursor-pointer'>About Me</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className="socials">
                    <ul className='flex gap-3'>
                        <li className='cursor-pointer'><img src="/vite.svg" alt="" /></li>
                        <li className='cursor-pointer'><img src="/vite.svg" alt="" /></li>
                        <li className='cursor-pointer'><img src="/vite.svg" alt="" /></li>
                    </ul>
                </div>

            </div>
            <Divider />
        </>

    )
}

export default Navbar
