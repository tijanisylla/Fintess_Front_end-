/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import siteUrl from '../url';

/*
////////////////
// Functions //
//////////////
*/

async function handleSubmit(event, token, id) {
    event.preventDefault();

    const [ count, duration ] = event.target;

    try {
        await axios(`${siteUrl}/api/routine_activities/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                count: `${count.value || 0}`,
                duration: `${duration.value || 0}`,
            }
        });

        window.location.reload();
    } catch(error) {
        console.error(error);
    };
};

/*
/////////////////
// Components //
///////////////
*/

const EditRoutAct = ({ activity }) => {
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        setCount(activity.count);
        setDuration(activity.duration);
    }, []);

    const token = localStorage.getItem('Token');

    return (
        <form id='edit-rout-act' onSubmit={ async (event) => handleSubmit(event, token, activity.routineActivityId) }>
            
            <label htmlFor='act-count'>Count: </label>
            <input name='act-count' id='act-count' type='number' placeholder='0'
            value={count} onChange={ (e) => setCount(e.target.value) } />
            
            <label htmlFor='act-duration'>Duration: </label>
            <input name='act-duration' id='act-duration' type='number' placeholder='0'
            value={duration} onChange={ (e) => setDuration(e.target.value) } />

            <button type='submit'>Submit</button>
        </form>);
}

export default EditRoutAct;