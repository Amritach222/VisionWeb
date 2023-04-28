import React from 'react'
import './card.css'
type cardProps = {
    image: any,
    name: String,
    description: String
}
const Card = (props: cardProps) => {
    return (
        <div className='product_card'>
            <div className='card_top'>
                <img src={props.image} height={'100%'} alt="Product image" />
            </div>
            <div className='card_bottom'>
                <h5>{props.name}</h5>
                <p>
                    {props.description.slice(0,100)+'...'}
                </p>
            </div>
        </div>
    )
}

export default Card