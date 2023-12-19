import React from 'react'
import Button from '../button/Button'
import headerBackground from '../../services/images/headerBackground.mp4'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='css-header'>
      <video autoPlay muted loop
      style={{
        width:'100%',
        height: '71.5%',
        position: 'absolute',
        objectFit: 'cover',
        zIndex: '-1'
      }}
      >
        <source src={headerBackground} type='video/mp4' />
        <source src={headerBackground} type='video/ogg' />
        Your browser does not support the video tag.
      </video>
      <div className='css-header-caption-div'>
        <h1 style={{color: 'black'}}>STAY FOCUSED</h1>
        <p style={{color: 'black'}}>Discover something that you are intresed in, <br></br>in a single click</p>
        <Link style={{textDecoration:'none', color:'inherit'}} to='/register'>
          <Button title="Get Strated" styles={{
            fontSize:'large',
            backgroundColor:'black',
            color:'white',
            padding:'2% 8% 2% 8%',
            borderStartEndRadius: '15% 50%',
            borderEndEndRadius: '15% 50%',
            borderTopLeftRadius: '15% 50%',
            borderBottomLeftRadius: '15% 50%',
            margin: '2% 0 0 0'
          }} />
        </Link>
      </div>
    </header>
  )
}

export default Header