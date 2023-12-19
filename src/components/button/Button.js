import React from 'react'

function Button(props) {
  return (
    <button 
    className='btns {props.class}'
    style={props.styles}
    >
      {props.title}
    </button>
  )
}

export default Button