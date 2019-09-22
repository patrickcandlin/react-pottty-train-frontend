import React, { Component } from 'react'

export default class UpdatePotty extends Component {
   
    constructor(props){
        super(props)
        this.state={
            potty: {
            id: props.potty.id,
            number: this.props.potty.number,
            notes: this.props.potty.notes,
            date: this.props.potty.date,
            location: this.props.potty.location,
            }
          }
    }

    handleSubmit = (event) => {

        const potty = this.state.potty
        event.preventDefault()
        this.props.updatePotty(potty)
        this.props.closeUpdateForm()
    }

    handelChange = (event) => {
        const { name, value } = event.target
        this.setState({
            potty:{
            ...this.state.potty,
            [name]: value
            }
        })
      }
    render(props) {
        const { notes, date, number, id } = this.state.potty 
        return(
            <form id="update-potty" onSubmit={this.handleSubmit} >
               <p>
                <label>Number:</label>
                <input type="hidden" name="id" value={id} />
                <input 
                  type="text" 
                  name="number" 
                  value={number}
                  placeholder="1 or 2"
                  onChange={this.handelChange}
                  />
              </p> 
              <p>

                <label>Notes:</label>
                <input 
                  type="text" 
                  name="notes" 
                  value={notes}
                  placeholder="Notes?"
                  onChange={this.handelChange}
                 />
              </p>
              <p>
                <label>Date:</label>
                <input 
                  type="date" 
                  name="date"
                  value={date}
                  onChange={this.handelChange}
                  />
              </p>
                <p>
                    <label>Location:</label>
                    <input type="radio" name="location" value="Carpet" onChange={this.handelChange}/>Carpet
                    <input type="radio" name="location" value="Hardwood"onChange={this.handelChange}/>Hardwood
                    <input type="radio" name="location" value="Outside"onChange={this.handelChange}/>Outside
                    <input type="radio" name="location" value="Potty"onChange={this.handelChange}/>Potty
                </p>
                <input className="btn btn-info"  type="submit" value="Save"/>
          </form>
        )
    }

}