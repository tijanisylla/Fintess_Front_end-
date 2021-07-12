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

async function handleSubmit(event, { token, setError }) {
    event.preventDefault();

    const { target } = event;
    const [ name, goal, isPublic ] = target;

    try {
        await axios(`${siteUrl}/api/routines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                name: `${name.value}`,
                goal: `${goal.value}`,
                isPublic: `${isPublic.checked}`
            }
        });

        window.location.reload();
    } catch(error) {
        setError('*A routine with that name already exists');
        console.error(error);
    };
};

/*
/////////////////
// Components //
///////////////
*/

const NewRoutine = ({ token }) => {
    const [error, setError] = useState('');
    const [routName, setRoutName] = useState('');
    const [routGoal, setRoutGoal] = useState('');
    
    const submitFields = { token, setError }

    return (
        <form id='new-routine' onSubmit={(event) => handleSubmit(event, submitFields)}>
            <h3>New Routine</h3>
            
            <p className='error'>{error}</p>

            <label  htmlFor='new-name'>Name:</label>
            <input id='new-name' type='text' placeholder='name' required
            value={routName} onChange={async (e) => setRoutName(e.target.value)} />

            <label htmlFor='new-goal'>Goal:</label>
            <input id='new-goal' type='text' placeholder='goal' required
            value={routGoal} onChange={async (e) => setRoutGoal(e.target.value)} />
            
            <label htmlFor='public-box'>Public:</label>
            <input id='public-box' type='checkbox' />
            
            <button id ='btn-submit' type='submit'>Submit</button>    
        </form> );
};

export default NewRoutine;