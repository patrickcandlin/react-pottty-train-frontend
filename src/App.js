import React, { Component } from "react";
import NavBar from "./components/NavBar.js"
import Journal from "./Journal"
import Tips from "./Tips"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import { format } from "url";

// const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties"
const pottyUrl = "http://localhost:3090/potties"

export default class App extends Component {
 
  state={
    potties: [],
    tips: [],
  }
  
  componentDidMount(){
    fetch(pottyUrl)
      .then(response => response.json())
      .then(json => this.setState(
        {potties: json}
      ))

    fetch(`http://localhost:3000/tips`)
      .then(response => response.json())
      .then(result => this.setState({
          tips: result
              }
          )
      )
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
  getTips = () => {
    return <Tips tips={this.state.tips} />
  }
  getJournal = () => {
    return <Journal 
            addPotty={this.addPotty}
            deletePotty={this.deletePotty}
            updatePotty={this.updatePotty}
            potties={this.state.potties}
          />
  }
  render() {
    
    return (
      <Router> 
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/" exact component={ this.getJournal }/>
            <Route path="/tips/" component={ this.getTips} />
          </Switch>
        </main>  
    </Router>
    );
  }
}



