import React, { Component } from 'react'
import UpdatePotty from "./UpdatePotty"
import pottyImage from "./images/potty.jpeg"
import hardwood from "./images/hardwood.jpeg"
import carpet from "./images/carpet.jpeg"
import outside from "./images/outside.jpeg"


export default class PottyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            update: false
        }
    }
    handleDelete = (event) => {
        this.props.deletePotty(this.props.potty.id)
    }

    showUpdateFrom = (event) => {
        this.setState({
            update: !this.state.update
        })
    }
    render(){
        const { potty } = this.props


        return(
            <div className="potty-card">
                    <p>{potty.number}</p>
                    <p>{potty.notes}</p>
                    <p>{potty.date}</p> 
                    <p>{potty.location}</p> 
                    <button onClick={this.handleDelete}>Delete</button>
                    <button onClick={this.showUpdateFrom}>Update</button>
                    { this.state.update && <UpdatePotty potty={potty} /> }
                
            </div>
        )   
    }
}
