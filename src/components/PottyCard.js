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

    closeUpdateForm = () => {
        this.setState({
            update: !this.state.update
        })
    }

    showUpdateFrom = (event) => {
        this.setState({
            update: !this.state.update
        })
    }
    render(){
        const { potty, } = this.props
        const { update } = this.state

        return(
            <div className="potty-card">
                    {  this.state.update && <UpdatePotty 
                                potty={potty} 
                                updatePotty={this.props.updatePotty}
                                closeUpdateForm={this.closeUpdateForm}/> }
                   {!update && <span>{`${potty.number} - Notes: ${potty.notes} -  location: ${potty.location}`} </span>}
                   {!update && <span>{potty.date}</span>} 
                   {!update && <span></span>} 
                    <p>{!update && <button onClick={this.handleDelete}>Delete</button>}
                    {!update 
                        ? <button onClick={this.showUpdateFrom}>Update</button> 
                        : <button onClick={this.showUpdateFrom}>Close</button> }</p>
                    
            </div>
        )   
    }
}
