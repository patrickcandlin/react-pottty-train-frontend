import React, { Component } from "react";

import './App.css';

const pottyUrl = "https://albert-potty-train-backend.herokuapp.com/potties"

export default class App extends Component {
  state={
    number: "",
    notes: "",
    date: "",
    where: "",
  }

  submitPotty = (event) => {

    event.preventDefault()
    console.log('save this potty')
    fetch(pottyUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                number: 1,
                notes: 'he was focusing on his blocks',
                date: '2019/08/21',
                where: 'carpet',
            })})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Albert's Potty tracker</h1>
          <button>Potty!</button>
          <button>Not.</button>
          <form id="record-potty" onSubmit={this.submitPotty}>
              <label>Number:</label>
              <input type="number" name="email" placeholder="1 2"/>
              <label>Notes</label>
              <input type="text" name="first_name" placeholder="Notes?"/>
              <label>Date</label>
              <input type="date" name="birth_date"/>
              <p>
                  <label>Where</label>
                  <input type="radio" name="where" value="Carpet"/>Carpet
                  <input type="radio" name="where" value="Hardwood"/>Hardwood
                  <input type="radio" name="where" value="Outside"/>Outside
                  <input type="radio" name="where" value="Potty"/>Potty
              </p>
              <input type="submit" value="SUBMIT"/>
        </form>


      </div>
    );
  }
}



