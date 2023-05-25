import React from 'react'
import './But.css';


const Button = (props) => {
  return (
    <button className='gradient-button'>
      {props.children}
    </button>
  )
}

export default Button
