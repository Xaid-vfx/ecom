import React from 'react'
import { Button } from '@mui/material-next'
import "./home.css"
import Card from '../../components/card/card'
import img from '../../assets/back-img.jpg'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  return (
    <section style={{backgroundColor:"#D3D3D3", height:'100%', paddingBottom:'20px'}}>
    <div className="banner" style={{
      backgroundPosition:"center center", height:"600px", backgroundSize:"contain", width:"100%"
    }}>
     
    <div className='text' style={{display:"grid"}}>
    <h2>Shopping And Department Store.</h2>
    <p3>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p3>
    
    </div>
   
   
   
    <div className='button-container' style={{bottom:"100px", paddingLeft:"240px", position:"absolute"}}>
    <Button variant='contained' size="large" sx = {{backgroundColor:"brown", color:"Gray", fontWeight:"600", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Learn more</Button>
    </div>
    
    

    </div>
    <br/>
    <h1 style={{display:"flex", paddingLeft:"35px"}}>Most Selling Products</h1>
    <div className='multi-card'>
    <Card title = "you" desc ="about you" price ="$200.00" img={img}/>
    <Card title = "you" desc ="about you" price ="$200.00" img={img}/>
    <Card title = "you" desc ="about you" price ="$200.00" img={img}/>
    <Card title = "you" desc ="about you" price ="$200.00" img={img}/>
      </div>
    
    <br/>
    <Footer/>
    </section>
  )
}

export default Home