import React, { Component } from "react";
import PottyForm from "./components/PottyForm"
import PottiesContainer from "./components/PottiesContainer"
import carphoto from "./components/images/IMG_1085.jpg"
import './App.css';

const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties"
// const pottyUrl = "http://localhost:3000/potties"

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

  updatePotty = (potty) => {
    let pottyId = potty.id 
    console.log('update function called in app', potty.id, potty.number, potty.notes,)
    fetch(pottyUrl+`/${potty.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
          number: potty.number,
          notes: potty.notes,
          date: potty.date,
          location: potty.location,
        }
        )
    })
    this.setState({
      potties: [ potty, ...this.state.potties.filter(potty => potty.id !== pottyId)]
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
        <div className="rsidebar-content">
          <h2>Potty Training Tips</h2>
        </div>
          <img src={carphoto} alt="cute-car-photo" />
        <main> 
          <h1>#2 Doo List 🚽</h1>
          <PottyForm 
            addPotty={this.addPotty}
            />
          <PottiesContainer 
            deletePotty={this.deletePotty}
            updatePotty={this.updatePotty}
            potties={potties}
            />
        </main>  
          <section className='potty-training-tips'>
            
          </section>
        </div>
    );
  }
}



