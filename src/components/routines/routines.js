/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/routines.css';
import '../css/activities.css';
import siteUrl from '../url';

import RoutineTemplate from './routine_template'

/*
////////////////
// Functions //
//////////////
*/

async function getAllRoutines(setRoutines) {
    let { data: allRoutines } = await axios.get(`${siteUrl}/api/routines`);
    setRoutines(allRoutines);
};

/*
////////////////
// Component //
//////////////
*/

const Routines = () => {
    // States
    const [routines, setRoutines] = useState([]);

    // Fetch routines from database on component load
    useEffect(() => {
        getAllRoutines(setRoutines);
    }, []);
    
    // Insert the fetched routines into the html template
    const routineList = routines.map((rout, idx) => {
        return <RoutineTemplate key={idx} routine={rout}/>
    });

    return (
        <div id='routine-list'>
            {routineList}
        </div> );
};

export default Routines;