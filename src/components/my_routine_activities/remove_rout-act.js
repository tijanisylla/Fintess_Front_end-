/*
///////////////////
// Requirements //
/////////////////
*/

import axios from 'axios';
import siteUrl from '../url';

/*
////////////////
// Functions //
//////////////
*/

async function handleRemove(event, activity, token) {
    event.preventDefault();

    try {
        await axios(`${siteUrl}/api/routine_activities/${activity.routineActivityId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch(error) {
        console.error(error);
    };
};

/*
/////////////////
// Components //
///////////////
*/

const RemoveRoutAct = ({ activity, setRemoved }) => {
    const token = localStorage.getItem('Token');

    return <button onClick={ (e) => {handleRemove(e, activity, token); setRemoved(true)} }>Remove</button>
};

export default RemoveRoutAct;