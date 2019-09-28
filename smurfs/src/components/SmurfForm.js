import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({});
    console.log("In smurfForm", smurf);
    const handleChange = (event) => {
        console.log(smurf);
        return setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h1>Add a Smurf to the Village</h1>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}></input>
            <input 
                type="text"
                name="height"
                placeholder="Height"
                onChange={handleChange}></input>
            <input 
                type="text"
                name="age"
                placeholder="Age"
                onChange={handleChange}></input>
            <button onClick={() => props.addSmurf(smurf)}>Add Smurf</button>
        </div>
    )
}

export default connect(null, {addSmurf: addSmurf})(SmurfForm);