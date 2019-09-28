import React, { useEffect } from "react";
import "./App.css";

// Import Components
import SmurfForm from './SmurfForm.js';
import SmurfList from './SmurfList.js';
import {getSmurfs, addSmurf} from '../actions/index';

const App = () => { 
  useEffect(() => {
    getSmurfs()
    // console.log("In useEffect")
}, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfList />
      </div>
    );
}

export default App;
