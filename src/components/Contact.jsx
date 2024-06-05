import { useState } from 'react';
import Subsection from './Subsection';

const Contact = () => {

    const [contactData, setContactData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        message : ""
    })

    function handleSubmit(e){
        e.preventDefault();
        
        fetch('http://localhost:4000/messages',{
            method : 'POST',
            body: JSON.stringify(contactData),
        })
        .then(response => response.json())
        .then(setContactData({firstName : "",
        lastName : "",
        email : "",
        message : ""}))
    }

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setContactData({...contactData, [name]:value})
    }

    return (
        <div>
            
            <Subsection image="./mail.svg" message="Stay in Touch" />
            <div className="query-form flex gap-6 w-[60vw] mx-auto">
                <div className="image m-10 py-32"><img width="800" height="1000" className='object-fill' src="/contactPageImage.jpg" alt="" /></div>
                <div className='my-10'>
                    <form className="flex flex-wrap justify-start gap-10 items-center text-center p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                        <h2 className=' mx-auto font-bold'>For Any Inquiries Contact Me</h2>
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="text" name="firstName" id="firstName" placeholder='First Name' value={contactData.firstName} onChange={handleChange} required/>
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="text" name="lastName" id="lastName" placeholder='Last Name' value={contactData.lastName} onChange={handleChange}/>
                        <input className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-64' type="email" name="email" id="email" placeholder='Email' value={contactData.email} onChange={handleChange} required/>
                        <textarea className='border-b-2 border-gray-300 focus:border-blue-500 outline-none m-4 p-2 w-full resize-none h-32' name="message" id="message" placeholder='Type your message here...' value={contactData.message} onChange={handleChange}></textarea>
                        <button type="submit" className= ' text-center border-yellow-300 border-2 text-yellow-300 hover:bg-yellow-300 hover:text-white font-bold py-2 px-4 rounded transition duration-300'>Submit</button>
                    </form>


                </div>

            </div>
            
        </div>
    )
}

export default Contact