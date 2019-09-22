import React, { Component } from 'react'
import UpdatePotty from "./UpdatePotty"



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
                    <p>{!update && <button className="btn btn-info"  onClick={this.handleDelete}>Delete</button>}
                    {!update 
                        ? <button className="btn btn-info" onClick={this.showUpdateFrom}>Update</button> 
                        : <button className="btn btn-info" onClick={this.showUpdateFrom}>Close</button> }</p>
                    
            </div>
        )   
    }
}
