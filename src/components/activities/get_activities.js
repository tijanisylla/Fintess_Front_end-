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

async function getActivities() {
    let { data } = await axios.get(`${siteUrl}/api/activities`);
    return data;
};

export default getActivities;