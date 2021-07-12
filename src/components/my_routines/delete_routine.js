
import axios from 'axios';
import siteUrl from '../url';

async function handleDelete(event, { token, routine }) {
    event.preventDefault();

    try {
        await axios(`${siteUrl}/api/routines/${routine.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        
        window.location.reload();
    } catch(error) {
        console.error(error);
    };
};



const DeleteRoutine = ({ routine }) => {
    const token = localStorage.getItem('Token')
    
    const deleteFields = {token, routine}

    return (
        <form className='delete-routine' onSubmit={(e) => handleDelete(e, deleteFields)}>
            <h3>Delete Routine?</h3>
            <button className='sub-edits' type='submit'>Confirm</button>
        </form> );
};

export default DeleteRoutine;