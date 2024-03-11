import React from 'react'
import build from '../img/build.jpg'
import db1 from '../img/db1.jpg'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 
import { BsFillTelephoneFill } from "react-icons/bs";
import {AiOutlineMail} from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactUs = () => {
  return (
        <div className='w-full h-screen mt-8 bg-cover bg-fixed flex items-center justify-center  flex-col   ' style={{backgroundImage:`url(${db1})`}} >
     {/* <img className='shadow-lg' src={build} alt='build'/> */}
     <div className='content m-20'>
      <h2 className='text-white text-3xl font-bold pl-12'>Contact Us</h2>
      <p className='text-white'>Fill the form to put your Questions</p>
     </div>
     <div className='upper  flex gap-56'>
   <div>
   <div className='address flex'>
    <div className='w-11 h-11 rounded-full bg-white m-5 flex items-center justify-center'> <h1><FontAwesomeIcon className='' icon={faLocationDot} /></h1></div>
     <div className='flex flex-col'>
     <p className='text-teal-500'>Address</p>
     <p className='text-white'>Salt lake sector |||</p>
     </div>
     </div>
     <div className='contact flex'>
     <div className='w-11 h-11 rounded-full bg-white m-5 flex items-center justify-center '>
     <h1><BsFillTelephoneFill /></h1>
     </div>
 
<div className='flex flex-col'>
<p className='text-teal-500'>Phone</p>
  <p className='text-white'>7257851944</p>
</div>
     </div>
     <div className='mail flex'>
<div className='w-11 h-11 rounded-full bg-white m-5 flex items-center justify-center'>
<h1><AiOutlineMail /></h1>
</div>
<div className='flex flex-col'>
<p className='text-teal-500'>Email</p>
<p className='text-white'>satyamaman87@gmail.com</p>
</div>
     </div>
   </div>
     <div className='form bg-white p-8 mt-[-20px]'>
          <form 
          action='https://formspree.io/f/xgejdrpk'
          method='POST'
          >

          <h2 className='font-bold text-gray-600 text-xl'>Send message</h2>
          <div className='flex flex-col m-4'>
          <input
        type="text"
        placeholder="Full Name"
        className='m-4 shadow-lg'
        name='name'
      />
       <input
        type="email"
        name='email'
        placeholder="Email here"
        className='m-4 shadow-lg'
      />
       <input
        type="text"
        name='text'
        placeholder="Put you message"
        className='m-4 shadow-lg'
      />
          </div>
          <button className='bg-emerald-400 p-2 rounded-md text-white m-2'>Send</button>
          </form>
     </div>
     </div>

    </div>
  )
}

export default ContactUs
