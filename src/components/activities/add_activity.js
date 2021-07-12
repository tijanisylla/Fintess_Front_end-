/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState } from 'react';
import axios from 'axios';
import siteUrl from '../url';

/*
////////////////
// Functions //
//////////////
*/

async function handleAdd(event, id, setError) {
    event.preventDefault();

    const [activityID, count, duration] = event.target

    try {
        await axios(`${siteUrl}/api/routines/${id}/activities`, {
            method: 'POST',
            data: {
                activityId: `${activityID.value}`,
                count: `${count.value || 0}`,
                duration: `${duration.value || 0}`
            }
        });

        window.location.reload();
    } catch(error) {
        setError('Routine already contains selected activity!');
        console.error(error);
    };
};

/*
/////////////////
// Components //
///////////////
*/

const AddActivity = ({ routine, actList }) => {
    const [act, setAct] = useState('Activities');
    const [error, setError] = useState('');
    const [actCount, setActCount] = useState('');
    const [actDuration, setActDuration] = useState('');

    return (
        <form onSubmit={async (e) => handleAdd(e, routine.id, setError)}>

            <p className='error'>{error}</p>

            <label htmlFor='select-activity'>Activity: </label>
            <select name='select-activity' id='select-activity'
            value={act} onChange={ async () => setAct(document.getElementById('select-activity').value) }>
                {actList.map( (act, idx) => <option key={'classification'+idx} value={act.id}>{act.name}</option> )}
            </select>

            <label htmlFor='act-count'>Count: </label>
            <input name='act-count' id='act-count' type='number' placeholder='0'
            value={actCount} onChange={async (e) => setActCount(e.target.value)}>
            </input>
            
            <label htmlFor='act-duration'>Duration: </label>
            <input name='act-duration' id='act-duration' type='number' placeholder='0'
            value={actDuration} onChange={async (e) => setActDuration(e.target.value)}>
            </input>

            <button type='submit'>Submit</button>
        </form>);
};

export default AddActivity;