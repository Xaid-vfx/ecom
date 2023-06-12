import React,{useState}from 'react'
import "./navbar.css"
import { Button } from '@material-ui/core'




const Navbar = () => {

    const [click, setclick]=useState(false)
  
    const handleClick = () => {
      setclick(!click)
    }

    return (
        <div className='header'>
      
        <div className='nav-bar'>
     

      <div className="nav-button1">
         <Button variant='outlined' color='inherit' onClick={handleClick}> Sign up</Button>
      </div>

      <div className="nav-button2">
          <Button variant='outlined' color="secondary" onClick={handleClick}>Log in</Button>
        
     </div>
      
  

        </div>
      </div>
    
    )
}

export default Navbar