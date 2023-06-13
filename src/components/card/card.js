import React from "react";
import "./card.css"

export default function Card(props) {
    return (
        <div className="card" style={{border:"1px solid"}}>
            <img src = {`../../assets/${props.img}`} className="card-image" />
            <div className="card-stats">
                <div className="pricetitle">
                    <div className="cardtitle">{props.title}title</div>
                    <div className="cardprice">{props.price}250$</div>
                </div>
                <div className="carddesc">{props.desc}des</div>
                <div className="cardbtn"> 
                Buy Now
                </div>
            <div/>

            </div>
        </div>
    )}
