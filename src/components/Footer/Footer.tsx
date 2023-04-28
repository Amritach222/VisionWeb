import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import Button from '../Button/Button'
const aboutText: String = ` Welcome to our computer shop and service website!
At Vision computer solution , we pride ourselves on providing top-notch computer products and services to our valued customers. Our team of experienced technicians is dedicated to ensuring that you get the best possible experience with your computer.
We have been in the computer business for 2 years, and over time, we have become a trusted name in the industry. Our commitment to excellence is evident in everything we do, from the quality of our products to the expertise of our technicians.
We understand that buying a computer can be overwhelming, with so many different brands and models to choose from. That's why we take the time to listen to your needs and help you find the perfect computer for your lifestyle and budget. Our goal is to make sure you feel confident and satisfied with your purchase.
In addition to our computer sales, we offer a wide range of services to keep your computer running smoothly. From virus removal to hardware repairs, our team has the knowledge and tools necessary to get the job done right. We also offer custom-built computers for those who require a more specialized setup.
At Vision computer solution , we believe that customer satisfaction is the key to our success. We go above and beyond to make sure that each and every one of our customers is happy with their purchase and the service they receive.
Thank you for considering Vision computer solution for your computer needs. We look forward to serving you!`
const Footer = () => {
    const imageData = [{ icon: <BsFacebook size={30} /> }, { icon: <BsInstagram size={30} /> }, { icon: <BsLinkedin size={30} /> }, { icon: <BsTwitter size={30} /> }]
    return (
        <div className='footer'>
            <div className="footer_top">
                <div className="left">
                    <p>About us</p>
                    <div className='content'>
                        {aboutText.slice(0, 300) + '....'}
                        <Button type='secondary' name={'Read more'} style='outlin' align='right'  />
                    </div>
                </div>
                <div className="mid">
                    <p>Quick contact</p>
                    <div className='quick_contact_text'>+977-9815445779</div>
                    <div className='quick_contact_text'>061590454</div>
                    <div className='quick_contact_text'>visioncomputerworld@gmail.com</div>
                    <div className='quick_contact_text'>BagaleTole-8 Pokhara</div>
                </div>
                <div className="right">
                    <p> Social links</p>
                    <SocialMediaIcons data={[...imageData]} />
                </div>
            </div>
            <div className="footer_bottom">
                <div className='footer_bottom_left'>Copyright @2023 All Right Reserved by: <a href="/">Vision computer solution</a> </div>
                <div className='footer_bottom_right'> Developed and coded By: <a href="https://amrit-acharya.com.np" target='_blank'> Amrit Acharya</a></div>
            </div>
        </div>
    )
}

export default Footer