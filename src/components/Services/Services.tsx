import React from 'react'
import './services.css'
import services from '../../assets/services.png'
import { BsCheckSquareFill } from 'react-icons/bs'
const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='services_left'>
                <h3>Our services</h3>
                <div className='services_content'>
                    Welcome to  Vision computer solution, where we provide the latest technology and exceptional customer service. We are committed to offering a wide range of high-quality computer products at competitive prices, along with expert advice to help you find the perfect solution for your needs. <br />
                    We carry a variety of desktop and laptop computers from top brands such as Dell, HP, and Lenovo, along with a wide selection of peripherals and accessories to enhance your computing experience.
                    Our team of knowledgeable technicians is always available to answer your questions and provide technical support, ensuring that you get the most out of your investment.
                </div>
                <b>Sales and services:</b>
                <ul className='services_list'>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>Laptop</span></li>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>Desktop</span></li>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>Networking</span> </li>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>Printer</span> </li>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>CC-Camera</span></li>
                    <li> <BsCheckSquareFill color='#38aa3a' /> <span className='ms-2'>Attendance</span></li>
                </ul>
            </div>
            <div className='services_right'>
                <div className='services_right_content'>
                    <img src={services} alt="Service image" />
                </div>
            </div>
        </div>
    )
}

export default Services