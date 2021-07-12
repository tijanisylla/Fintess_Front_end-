/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState, useEffect } from 'react';

import {default as getActivities} from './get_activities';
import '../css/activities.css';

import NewActivity from './new_activity';

/*
////////////////
// Functions //
//////////////
*/

function displayActivities(activities) {
    // Inserts the array of activites into templates
    const activityList = activities.map((act, idx) => {
        return (
            <div key={idx} className='activity'>
                <h1>Name: {act.name}</h1>
                <h1>Description: {act.description}</h1>
            </div>
        );
    });

    return activityList;
};

/*
/////////////////
// Components //
///////////////
*/

const Activities = ({ loggedIn }) => {
    const token = localStorage.getItem('Token');
    
    // States
    const [activities, setActivities] = useState([]);

    // Fetch activites from database on component load
    useEffect(() => {
        async function getAllActivities() {
            let allActs = await getActivities();
            setActivities(allActs);
        };

        getAllActivities();
    }, []);

    // Insert the fetched activites into the html template
    const activityList = displayActivities(activities);

    return (
        <div id='activity-table'>
            {loggedIn ? <NewActivity token={token}/> : null}
            <div id='activity-list'>
                {activityList}
            </div>
        </div>
    );
};

export default Activities;