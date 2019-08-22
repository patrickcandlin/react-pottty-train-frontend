import React, { Component } from 'react'

export default class UpdatePotty extends Component {
   
    constructor(props){
        super(props)
        this.state={
            id: this.props.potty.id,
            number: this.props.potty.number,
            notes: this.props.potty.notes,
            date: this.props.potty.date,
            location: this.props.potty.location,
          }
    }

    handelChange = (event) => {
        console.log('hello from update potty')
    }
    render(props) {
        const { notes, date, number } = this.state 
        console.log('hello from update potty',this. props)
        return(
            <form id="update-potty" onSubmit={this.submitPotty} >
                <label>Number:</label>
                <input 
                  type="text" 
                  name="number" 
                  value={number}
                  placeholder="Notes?"
                  onChange={this.handelChange}
                />
                <label>Notes:</label>
                <input 
                  type="text" 
                  name="notes" 
                  value={notes}
                  placeholder="Notes?"
                  onChange={this.handelChange}
                />
                <label>Date:</label>
                <input 
                  type="date" 
                  name="date"
                  value={date}
                  onChange={this.handelChange}
                />
                <p>
                    <label>Location:</label>
                    <input type="radio" name="location" value="Carpet" onChange={this.handelChange}/>Carpet
                    <input type="radio" name="location" value="Hardwood"onChange={this.handelChange}/>Hardwood
                    <input type="radio" name="location" value="Outside"onChange={this.handelChange}/>Outside
                    <input type="radio" name="location" value="Potty"onChange={this.handelChange}/>Potty
                </p>
                <input type="submit" value="Update"/>
                <button>Cancel</button>
          </form>
        )
    }

}