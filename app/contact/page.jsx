"use client"
import React, { useState } from 'react'

const page = () => {

  const [user,Setuser] = useState({
    username:"",
    email:"",
    number:"",
    message:""
  })
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    Setuser((prev) => ({...prev,[name]:[value]}))
  }
  const handleSubmit = ()=>{

  }
  return (
    <div>
        <div>
     <div className='flex justify-center bg-gray-200 h-full p-2 flex-col text-center'>
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>
      <div className="flex items-center  justify-center font-semibold flex-col">
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
            <input  className="border-2 p-4 mt-5 w-96" required name='username' type="name" placeholder='Name' value={user.username} onChange={handleChange} />
            <br />
            <input  className="border-2 p-4 mt-5 w-96" required name='email' type="email" placeholder='Email'  value={user.email}  onChange={handleChange}/>
            <br />
            <input  className="border-2 p-4 mt-5 w-96" required name='number' type="number" placeholder='Number'  value={user.number} onChange={handleChange} />
            <br />
            <textarea className="border-2 p-4 mt-5 w-96" name="message" id="" cols="30" rows="10" value={user.message} onChange={handleChange} ></textarea>
              </form>
            </div>
              <button className="border-2 border-black rounded-2xl p-2 mt-5 hover:bg-gray-400 hover:text-white w-52" type='submit' onClick={handleSubmit}>Send Message</button>
              <iframe src="https://www.google.com/maps/embed?pb=!4v1699525354544!6m8!1m7!1smsrCkyCh9HvHAvAZIuJ_KA!2m2!1d28.98604544171796!2d79.42150025472417!3f201.15847871314548!4f7.29800788592361!5f0.7820865974627469" width={900} height={550} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mt-10'/>
      </div>
    </div>  
    </div>
  )
}

export default page