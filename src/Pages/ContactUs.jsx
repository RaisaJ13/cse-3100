import React, { useState } from 'react'
import './ContactUs.css'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
  const nagivate = useNavigate()
  const [Loading, setLoading] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    nagivate('/')
    console.log(e)
  }
  return (
    <div >
      <h1>Contact US</h1>
      <p> 
        Please fill out the form to reach us. We look forward to hear from you. 
      </p>
      <div className="form-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name' required/>
        <label htmlFor="phone">Phone no</label>
        <input type="number" placeholder='Enter your Number'required/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your Email'required/>
        <button type='submit' disabled={Loading}>
          {Loading?'Loading...':'Submit'}
        </button>
      </form>
     
     </div>
    </div>
  )
}
