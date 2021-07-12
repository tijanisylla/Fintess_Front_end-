
import React, { useState } from 'react';

import { AddActivity } from '../activities'

import EditRoutine from './edit_routine';
import DeleteRoutine from './delete_routine';

import { MyRoutActTemplate } from '../my_routine_activities';



const MyRoutineTemplate = ({ routine, actList }) => {
    // Owner action states
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [addingAct, setAddingAct] = useState(false);

    // Inserts the routine's activities into a template
    const { activities } = routine;
    const activityList = activities.map((act, idx) => {
        return <MyRoutActTemplate key={idx} activity={act}/>;
    });

    return (
        <div className='routine'>
            <h1>{routine.name}</h1>
            <h2>Creator: {routine.creatorName}</h2>
            <h3>Goal: {routine.goal}</h3>
            { activities.length > 0 ? 
                <div>
                    <h1>Activities:</h1>
                    <ul className='activity-list'>{activityList}</ul>
                </div> 
            : null }
            <button onClick={ () => {setEditing(!editing); setAddingAct(false); setDeleting(false)} }>Edit</button>
            <button onClick={ () => {setEditing(false); setAddingAct(!addingAct); setDeleting(false)} }>Add Activity</button>
            <button onClick={ () => {setEditing(false); setAddingAct(false); setDeleting(!deleting)} }>Delete</button>
                {editing ? <EditRoutine routine={routine} /> : null}
                {addingAct ? <AddActivity routine={routine} actList={actList} /> : null}
                {deleting ? <DeleteRoutine routine={routine} /> : null}
        </div>);
};

export default MyRoutineTemplate;