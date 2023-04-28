import React from 'react'
import image1 from '../../assets/carosel/cover.jpg'
import image2 from '../../assets/carosel/ad1.jpg'
import './home.css'
import { Carousel } from 'react-bootstrap'
const Home = () => {
    return (
        <div className='home'  id='home'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className=" carousel_image"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ color: 'green' }}> <b> Vision computer solution </b></h2>
                        <p style={{ color: 'red' }}>  "Committed to excellence in computer service" </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" carousel_image"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2> <b> Vision computer solution </b></h2>
                        <p style={{ color: 'red' }}>"A solution to your computer"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" carousel_image"
                        src={image2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2> <b> Vision computer solution </b></h2>
                        <p style={{ color: 'red' }}>"Committed to excellence in computer service" </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home