import React,{useState} from 'react'
import Divider from './Divider'

const SubscriptionForm = () => {

    const [email, setEmail] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log("Subscription Form submitted")
        fetch('http://localhost:4000/subscribers',{
            method : 'POST',
            body: JSON.stringify({email:email}),
        })
        .then(response => response.json())
        .then(setEmail(""))
    }
    return (
        <>  
             <Divider />
            <div className='flex justify-center items-center w-full'>
                <div className='justify-center w-3/6'>
                    <div className='flex justify-center my-6'><img src="/mail.svg" alt="" /></div>
                    <h1 className='flex justify-center font-bold text-4xl italic text-slate-600'>Don't Miss Out</h1>
                    <div className='text-lg font-semibold my-10 text-center'>Sign Up and Get All My Delicious Recipes</div>
                    <form className="py-6 text-center" onSubmit={handleSubmit}>
                        <input className=" border-b-2 w-3/4 border-b-yellow-300 text-center py-1 " type="email" name="emailAddress" id="emailId" placeholder='Enter your email here*' value={email} onChange={(e)=> setEmail(e.target.value)}required />
                        <button className="mx-3 px-3 py-1 border-yellow-300 border-2 text-yellow-300 hover:bg-yellow-300 hover:text-white" type="submit">Subscribe</button>
                    </form>

                    <div className="socials my-10">
                        <ul className='flex gap-3 justify-center'>
                            <a href=""><li className='cursor-pointer'><img src="/facebook.svg" alt="" /></li></a>
                            <a href=""><li className='cursor-pointer'><img src="/instagram.svg" alt="" /></li></a>
                            <a href=""><li className='cursor-pointer'><img src="/youtube.svg" alt="" /></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <Divider/>
        </>
    )
}

export default SubscriptionForm