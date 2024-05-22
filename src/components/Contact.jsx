import React from 'react';
import Navbar from './Navbar';
import SubscriptionForm from './SubscriptionForm';
import Footer from './Footer';
import Background from './Background';
import Subsection from './Subsection';

const Contact = () => {
    return (
        <div>
            <Background />
            <Navbar />
            <Subsection image="./mail.svg" message="Stay in Touch" />
            <div className="query-form flex gap-6 w-[60vw] mx-auto">
                <div className="image m-10"><img width="700" height="700" src="/contactPageImage.jpg" alt="" /></div>
                <div className='my-10'>
                    <form className="flex flex-wrap justify-start gap-10 items-center text-center p-6 bg-white shadow-md rounded-lg" action="">
                        <h2 className=' mx-auto font-bold'>For Any Inquiries Contact Me</h2>
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="text" name="firstName" id="firstName" placeholder='First Name' />
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="text" name="lastName" id="lastName" placeholder='Last Name' />
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="email" name="email" id="email" placeholder='Email' />
                        <textarea className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-full resize-none h-32' name="message" id="message" placeholder='Type your message here...'></textarea>
                    </form>


                </div>

            </div>
            <SubscriptionForm />
            <Footer />
        </div>
    )
}

export default Contact
