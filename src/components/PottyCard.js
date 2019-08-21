import React, { Component } from 'react'
import pottyImage from "./images/potty.jpeg"
import hardwood from "./images/hardwood.jpeg"
import carpet from "./images/carpet.jpeg"
import outside from "./images/outside.jpeg"


export default function (props){
    const { potty } = props
    const images = {
        'potty': pottyImage,
        'hardwood': hardwood,
        'carpet': carpet,
        'outside': outside
    }

    return(
        <div>
            {/* <img src={images[potty.location.toLowerCase()]} alt={images[potty.location]} /> */}
           <p>{potty.number}</p>
           <p>{potty.notes}</p>
           <p>{potty.date}</p> 
           <p>{potty.location}</p> 

        </div>
    )
}
