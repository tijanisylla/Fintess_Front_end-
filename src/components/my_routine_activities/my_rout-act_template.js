/*
///////////////////
// Requirements //
/////////////////
*/

import React, { useState } from 'react';

import { EditRoutAct, RemoveRoutAct } from '.';

/*
////////////////
// Component //
//////////////
*/

const MyRoutActTemplate = ({ activity }) => {
    const [editRoutAct, setEditRoutAct] = useState(false);
    const [removed, setRemoved] = useState(false);

    return (<>
        {!removed ?
            <div className='activity'>
                <li>
                    <h3>Name: {activity.name}</h3>
                    <h3>Description: {activity.description}</h3>
                    <h3>Count: {activity.count}</h3>
                    <h3>Duration: {activity.duration}</h3>
                </li>

                <button onClick={ () => setEditRoutAct(!editRoutAct) }>Edit</button>
                <RemoveRoutAct activity={activity} setRemoved={setRemoved}/> 
                {editRoutAct ? <EditRoutAct activity={activity}/> : null}
            </div>
        : null}
    </>);
};

export default MyRoutActTemplate;