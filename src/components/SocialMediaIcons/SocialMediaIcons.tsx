import React from 'react'
import './icons.css'
type iconProps={
    data:{icon:React.ReactNode}[]
}
const SocialMediaIcons = (props:iconProps) => {
  return (
    <ul  className='icons'>
       {
         props.data.map(( image, i)=>{
            return(
                <li> {image.icon}</li>
            )
         })
       }
    </ul>
  )
}

export default SocialMediaIcons