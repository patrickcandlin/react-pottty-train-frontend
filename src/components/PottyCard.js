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
                   {!update && <p>{potty.number}</p>}
                   {!update && <p>{potty.notes}</p>}
                   {!update && <p>{potty.date}</p>} 
                   {!update && <p>{potty.location}</p>} 
                   {!update && <button onClick={this.handleDelete}>Delete</button>}
                    
                                    { this.state.update && <UpdatePotty 
                                                potty={potty} 
                                                updatePotty={this.props.updatePotty}
                                                closeUpdateForm={this.closeUpdateForm}/> }
                    {!update 
                        ? <button onClick={this.showUpdateFrom}>Update</button> 
                        : <button onClick={this.showUpdateFrom}>Close</button> }
            </div>
        )   
    }
}
