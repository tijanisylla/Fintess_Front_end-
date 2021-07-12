/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/routines.css';
import siteUrl from '../url';

import getActivities from '../activities/get_activities';

import NewRoutine from './new_routine';
import MyRoutineTemplate from './myRoutine_template';

/*
////////////////
// Functions //
//////////////
*/

async function prefetchData(user, token, setRoutines, setActList) {
    let { data: myRoutines } = await axios.get(`${siteUrl}/api/users/${user}/routines`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    let allActivities = await getActivities();

    setRoutines(myRoutines);
    setActList(allActivities);
};

/*
/////////////////
// Components //
///////////////
*/

const My_Routines = () => {
    const user = localStorage.getItem('User');
    const token = localStorage.getItem('Token');

    // States
    const [routines, setRoutines] = useState([]);
    const [actList, setActList] = useState([]);

    // Fetch routines from database on component load
    useEffect(() => {
        prefetchData(user, token, setRoutines, setActList);
    }, []);
    
    // Insert the fetched routines into the html template
    const routineList = routines.map((rout, idx) => <MyRoutineTemplate key={idx} routine={rout} actList={actList}/>);

    return (
        <div id='my-routine-list'>
            <NewRoutine token={token} />
            {routineList}
        </div> );
};

export default My_Routines;