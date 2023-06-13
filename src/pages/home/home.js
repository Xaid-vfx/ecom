import React from 'react'
import { Button } from '@mui/material-next'
import "./home.css"
import Card from '../../components/card/card'



const Home = () => {
  return (
    <section>
    <div className="banner" style={{
      backgroundSize:"contain",backgroundPosition:"center center", height:"600px"
    }}>
     

   
   
    <div className='button-container' style={{bottom:"100px", padding:"10px", position:"absolute"}}>
    <Button variant='contained' color="primary"size="large" sx = {{backgroundColor:"black", color:"gray", fontWeight:"600", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>learn more</Button>
    </div>
    
    

    </div>
    <Card  />
    </section>
  )
}

export default Home