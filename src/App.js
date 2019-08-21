import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Albert's Potty tracker</h1>
        <button>Potty!</button>
        <button>Not.</button>
        <form id="record-potty">
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
                <input type="radio" name="where" value="Concret"/>Concret
                <input type="radio" name="where" value="Grass"/>Grass
                <input type="radio" name="where" value="Potty"/>Potty
            </p>
            <input type="submit" value="SUBMIT"/>
       </form>


    </div>
  );
}

export default App;
