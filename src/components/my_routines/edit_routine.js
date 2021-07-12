

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import siteUrl from '../url';



async function handleEdit(event, { token, setError, routine }) {
    event.preventDefault();
    
    const [ name, goal, isPublic ] = event.target;

    try {
        await axios(`${siteUrl}/api/routines/${routine.id}`, {
            method: 'PATCH',
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
        setError('*A routine with that name already exists!')
        console.error(error);
    };
};



const EditRoutine = ({ routine }) => {
    const token = localStorage.getItem('Token')

    // States
    const [error, setError] = useState('');
    const [editName, setEditName] = useState('');
    const [editGoal, setEditGoal] = useState('');

    const editFields = { token, setError, routine }

    // Sets the routine fields into the inputs on load
    useEffect(() => {
        setEditName(routine.name);
        setEditGoal(routine.goal);
    }, []);
    
    return (
        <form className='edit-routine' onSubmit={(e) => handleEdit(e, editFields)}>
            <h3>Edit Routine</h3>
            
            <p className='error'>{error}</p>

            <label htmlFor='edit-name'>Name:</label>
            <input className='edit-name' type='text' placeholder='name' required
            value={editName} onChange={async (e) => setEditName(e.target.value)} />

            <label htmlFor='edit-goal'>Goal:</label>
            <input className='edit-goal' type='text' placeholder='goal' required
            value={editGoal} onChange={async (e) => setEditGoal(e.target.value)} />
            
            <label htmlFor='edit-public'>Public:</label>
            <input className='edit-public' type='checkbox' 
            defaultChecked={routine.isPublic} />
            
            <button className='sub-edits' type='submit'>Submit</button>
        </form> );
};

export default EditRoutine;