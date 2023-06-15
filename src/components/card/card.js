import React from "react";
import "./card.css"
import { Button } from "@mui/material-next";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


export default function Card(props) {
    return (
        <div className="card" >
           <div style={{width:"400px",height:"260px", backgroundColor:"white"}}><img src = {`${props.img}`} className="card-image" alt="View it later"/></div> 

            <div className="card-stats">
                <div className="pricetitle">
                    <div className="cardtitle" >{props.title}</div>
                    <div className="cardprice"><b>{props.price}</b></div>
                </div>
                <br/>
                <div className="carddesc">{props.desc}</div>
                <br/>
                <div className="cardbtn"> 
                <div className="Icon"style={{display:"flex", marginLeft:"20px", cursor:"pointer"}}>
                <StarBorderOutlinedIcon/>
                <StarBorderOutlinedIcon/>
                <StarBorderOutlinedIcon/>
                <StarBorderOutlinedIcon/>
                <StarBorderOutlinedIcon/>
                </div>
                <br/>
              <Button 
              sx={{
                border:"1px solid black",
                display:"flex",
                marginLeft:"10px",
                justifyContent:"space-evenly",
                color:"black",
                "&:hover":{
                    color:"white",
                    backgroundColor:"darkgreen",
                   

                }
            }} 
              className="cardbttn"> Buy Now</Button> 
                </div>
               <br/>
                
            <div/>

            </div>
        </div>
    )}
