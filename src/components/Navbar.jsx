import React from 'react'
import Divider from './Divider'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-30'>
            <div className='Header flex justify-evenly items-center py-8 '>
                <div className="logo text-3xl cursor-pointer">Sam's Food</div>
                <div className="options">
                    <ul className='flex gap-8'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>All Recipes</li>
                        <li className='cursor-pointer'>About Me</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className="socials">
                    <ul className='flex gap-3 justify-center'>
                        <a href=""><li className='cursor-pointer'><img src="/facebook.svg" alt="" /></li></a>
                        <a href=""><li className='cursor-pointer'><img src="/instagram.svg" alt="" /></li></a>
                        <a href=""><li className='cursor-pointer'><img src="/youtube.svg" alt="" /></li></a>
                    </ul>
                </div>

            </div>
            <Divider />
        </div>

    )
}

export default Navbar
