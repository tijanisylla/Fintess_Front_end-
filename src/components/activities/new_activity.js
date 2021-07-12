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
    const [ name, description ] = target;

    try {
        const response = await axios(`${siteUrl}/api/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                name: `${name.value}`,
                description: `${description.value}`,
            }
        });

        window.location.reload();
    } catch(error) {
        setError('*An activity with that name already exists!');
        console.error(error);
    };
};

/*
/////////////////
// Components //
///////////////
*/

const NewActivity = ({ token }) => {
    const [error, setError] = useState('');
    const [actName, setActName] = useState('');
    const [actDesc, setActDesc] = useState('');
    
    const submitFields = { token, setError }

    return (
        <form id='new-act' onSubmit={async (event) => handleSubmit(event, submitFields)}>
            <h3>New Activity</h3>
            
            <p className='error'>{error}</p>

            <label  htmlFor='act-name'>Name: </label>
            <input name='act-name' id='act-name' type='text' placeholder='name' required
            value={actName} onChange={async (e) => setActName(e.target.value)} />

            <label htmlFor='act-desc'>Description: </label>
            <input name='act-desc' id='act-desc' type='text' placeholder='goal' required
            value={actDesc} onChange={async (e) => setActDesc(e.target.value)} />
            
            <button id ='btn-submit' type='submit'>Submit</button>    
        </form> );
};

export default NewActivity;