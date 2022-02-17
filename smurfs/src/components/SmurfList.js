import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';

import Smurf from './Smurf.js';

const SmurfList = (props) => {
    // useEffect(() => {
    //     getSmurfs()
    //     // console.log("In useEffect")
    // }, [props.villagers])
    
    return (
        <div>
            {console.log("SmurfList Props", props)}
            <h2>Our Village:</h2>
            {props.villagers.map((villager) => {
                return <Smurf key={villager.id} details={villager} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        villagers: state.villagers
    }
}
export default connect(mapStateToProps, {getSmurfs: getSmurfs})(SmurfList);