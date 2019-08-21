import React, { Component } from "react";
import PottyForm from "./components/PottyForm"
import PottiesContainer from "./components/PottiesContainer"
import './App.css';

const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties"
const localUrl = "http://localhost:3000/potties"

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
        <PottiesContainer potties={potties}/>
      </div>
    );
  }
}



