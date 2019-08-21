import React, { Component } from "react";
import PottyForm from "./components/PottyForm"
import PottiesContainer from "./components/PottiesContainer"
import './App.css';

// const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties"
const pottyUrl = "http://localhost:3000/potties"

export default class App extends Component {
 
  state={
    potties: [],
  }
  
  componentDidMount(){
    fetch(pottyUrl)
      .then(response => response.json())
      .then(json => this.setState(
        {potties: json}
      ))
  }

  deletePotty = (pottyId) => {
      fetch(pottyUrl+`/${pottyId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
     })
     this.setState({
        potties: this.state.potties.filter(potty => potty.id !== pottyId)
     }) 
  }

  addPotty = (potty) => {
    this.setState(
      {
        potties: [potty, ...this.state.potties]
      }
    )
  }

  render() {
    const { potties } = this.state
    return (

      <div className="App">
        <h1>Albert's Potty tracker</h1>
        <PottyForm 
          addPotty={this.addPotty}
        />
        <PottiesContainer 
          deletePotty={this.deletePotty}
          potties={potties}/>
      </div>
    );
  }
}



