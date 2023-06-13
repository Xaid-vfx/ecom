import React from "react";
import "./card.css"

export default function Card(props) {
    return (
        <div className="card" style={{border:"1px solid"}}>
            <img src = {`../../assets/${props.img}`} className="card-image" />
            <div className="card-stats">
                <span className="gray">{props.price}gg</span>
                <span className="gray">{props.description}jj</span>
            <div/>
            <p>{props.title}jj</p>

            </div>
        </div>
    )}
