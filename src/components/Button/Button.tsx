import React from 'react'
import './button.css'
type buttonProps={
    name:String,
    type:String, 
    style:String, 
    align:String
}

const Button = (props:buttonProps) => {
  return (
    <div
    className={`${props.type==='primary'?' primary ':' secondary '} ${props.style==='outline'?' outline':''} ${props.align==='right'?'btn_right':''}` }
    >{props.name}</div>
  )
}
export default Button