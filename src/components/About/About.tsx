import React from 'react'
import logo from '../../assets/logo.png'
import './about.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
const aboutText: String = ` Welcome to our computer shop and service website!
At Vision computer solution , we pride ourselves on providing top-notch computer products and services to our valued customers. Our team of experienced technicians is dedicated to ensuring that you get the best possible experience with your computer.
We have been in the computer business for 2 years, and over time, we have become a trusted name in the industry. Our commitment to excellence is evident in everything we do, from the quality of our products to the expertise of our technicians.
We understand that buying a computer can be overwhelming, with so many different brands and models to choose from. That's why we take the time to listen to your needs and help you find the perfect computer for your lifestyle and budget. Our goal is to make sure you feel confident and satisfied with your purchase.
In addition to our computer sales, we offer a wide range of services to keep your computer running smoothly. From virus removal to hardware repairs, our team has the knowledge and tools necessary to get the job done right. We also offer custom-built computers for those who require a more specialized setup.
At Vision computer solution , we believe that customer satisfaction is the key to our success. We go above and beyond to make sure that each and every one of our customers is happy with their purchase and the service they receive.
Thank you for considering Vision computer solution for your computer needs. We look forward to serving you!`
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about_left'>
                <div className='about_left_image_container'>
                    <div className='logo_image'>
                        <img src={logo} alt="logo_image" />
                        <h1>A Complete IT Solution.</h1>
                    </div>
                </div>
            </div>
            <div className='about_right'>
            <h3>About Us</h3>
                <p>
                {aboutText}
                <br />
                <div className='mt-2'>
                For More details.  <a className='contact_btn' href="#contact"> Contact us <BsFillArrowRightCircleFill/></a>
                </div>
                </p>
            </div>
        </div>
    )
}

export default About