import React from 'react'
import './product.css'
import accessories from '../../assets/accessories.png'
import test from '../../assets/logo.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Card from './components/Card/Card'
import laptop from '../../assets/products/laptop.png'
import desktop from '../../assets/products/desktop.png'
import accessory from '../../assets/products/accessories.png'
import printer from '../../assets/products/printer.png'
let data = [{
    image: laptop,
    name: 'Laptop',
    desc: `We offer a variety of laptops to suit different needs, including gaming laptops, business laptops, and ultrabooks. Each laptop has detailed specifications, including processor type, RAM, and storage capacity. We also include high-quality images of each laptop from multiple angles to help you see exactly what you're getting.`
},
{
    image: desktop,
    name: 'Desktop',
    desc: `Our desktops come in a range of sizes and styles, from all-in-one desktops to high-performance gaming towers. We provide detailed information about each desktop, including processor speed, graphics card, and storage capacity. You can also browse our selection of monitors to find the perfect display for your desktop.`
}
    ,
{
    image: printer,
    name: 'Printer',
    desc: `Our selection of printers includes both inkjet and laser printers, with options for both home and office use. We include detailed specifications about each printer, including print speed and connectivity options, as well as high-quality images of each printer.`
}
    ,
{
    image: accessory,
    name: 'Accessories',
    desc: `We have a wide range of accessories to complement your computing experience, including keyboards, mice, webcams, and speakers. We provide detailed information about each accessory, including compatibility with different devices and any special features.`
}
]
const Product = () => {
    return (
        <div className='product' id='products'>
            <div className='product_top'>
                <div className='product_top_left'>
                    <h3>Our Products.</h3>
                    <p>
                        We have everything you need in the field of IT. Dell, HP, Lenovo, Acer, Canon, Samsung, Brother,
                        and other famous products you can get from us. We deal with our valuable customers for distributing
                        desktop computers, laptops, printers, photocopy, servers, security solutions, EPABX, and other similar materials.
                    </p>
                    <div className='mt-2'>
                        For More details.  <a className='contact_btn' href="#contact"> Contact us <BsFillArrowRightCircleFill /></a>
                    </div>
                </div>
                <div className='product_top_right'>
                    <div className='product_top_right_image'>
                        <img src={accessories} width={'100%'} alt="accessories_image" />
                    </div>
                </div>
            </div>
            <div className='product_bottom'>
                {
                    data?.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Card image={item.image} description={item.desc} name={item.name} />
                            </React.Fragment>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product