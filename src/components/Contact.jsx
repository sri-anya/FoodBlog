import React from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import Divider from './Divider'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center py-20">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="/mail.svg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-extrabold italic text-center">Stay in Touch</h1>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="query-form flex gap-6 w-[60vw] mx-auto">
                <div className="image m-10"><img width="700" height="700" src="/contactPageImage.jpg" alt="" /></div>
                <div><h2>For Any Inquiries Contact Me</h2><form className="flex flex-wrap justify-start gap-10 items-center text-center" action="">

                    <input className='border-b-2 m-10' type="text" name="firstName" id="" placeholder='First Name' />
                    <input className='border-b-2 m-10' type="text" name="lasstName" id="" placeholder='Last Name' />
                    <input className='border-b-2 m-10' type="email" name="email" id="" placeholder='Email' />
                    <textarea className='border-b-2 m-10 resize' name="message" id="message" placeholder='Type your message here...'></textarea></form>

                </div>

            </div>
            <SubscriptionForm />
            <Footer/>
        </div>
    )
}

export default Contact
