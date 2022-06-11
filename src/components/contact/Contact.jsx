import './contact.scss'
import React, {  useState } from 'react'

export default function Contact() {

  const [message,setMessage]=useState(false)
  const [data,setData]=useState({email:"",text:""})

  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  function clickHandler(e){
    e.preventDefault()
    setData({email:"",text:""})
    setMessage(true)
    setTimeout(() => {
        setMessage(false)
    }, 2000);
  }

  return (
      <div className="contact" id='contact'>
        <div className="left">
          <img src="assets/contact.jpg" alt="" />
        </div>
        <div className="right">
          <div className="contactText">Contact</div>
          <form className="contactForm" onSubmit={clickHandler}>
            <input label="Email" placeholder='Email' value={data.email} name='email' onChange={changeHandler} type="Email"  className="formEmail" />
            <textarea value={data.text} onChange={changeHandler} name="text" placeholder="Enter your text here" rows="4" cols="50"></textarea>
            <button type='submit'>Send</button>
            {message && <span>Thanks, we will try to reply as soon as possible </span>}
          </form>
        </div>
      </div>
  )
}
