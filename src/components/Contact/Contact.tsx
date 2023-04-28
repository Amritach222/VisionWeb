import React from 'react'
import './contact.css'
import  Button  from '../Button/Button'
import { BsFillEnvelopeAtFill, BsFillGeoAltFill, BsPhoneFlip } from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact_left'>
      <div className='contact_left_heading'>
          <h3>Get in touch.</h3>
          <div>24/7 We will answer your questions and problems.</div>
        </div>
        <div  className='contact_details mt-4 ms-4'>
            <div className='phone mt-3'> <BsPhoneFlip size={25}/> 9815445779, 061590454, 9867419715 </div>
            <div className='email mt-3'><BsFillEnvelopeAtFill size={25} />  visioncomputerworld@gmail.com </div>
            <div className='address mt-3'> <BsFillGeoAltFill size={25}/> Bagale Tole -8 Pokhara.</div>
        </div>
        <div  className='google_location m-4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.610893031665!2d83.9838924!3d28.2191322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950d53ae6941%3A0xeccca98615fd2710!2sVision%20Computer%20Solution!5e0!3m2!1sen!2snp!4v1682419013322!5m2!1sen!2snp" width={'100%'} height="200" style={{border:0}} allowFullScreen={false} loading="lazy" ></iframe>
       </div>
      </div>
      <div className='contact_right'>
        
        <div className='contact_right_inputs'>
        <div className='contact_right_heading'>
          <h4>Message Us</h4>
        </div>
          <div className='message_input_name' >
            <div className='message_inputs'>
              <label htmlFor="first_name">First Name:</label>
              <input type="name" id='first_name' />
            </div>
            <div className='message_inputs'>
              <label htmlFor="last_name">Last Name:</label>
              <input type="name" id='last_name' />
            </div>
          </div>
          <div className='message_inputs' >
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' />
          </div>
          <div className='message_inputs' >
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id='phone' />
          </div>
          <div className='message_inputs' >
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" rows={6}></textarea>
          </div>
          <div className='message_inputs' >
            <Button type={'secondary'} style={''}  name='Submit' align={'right'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact