import { ActivityTemplate } from '../activities'

const RoutineTemplate = ({ routine, user }) => {
    // Inserts the routine's activities into a template
    const { activities } = routine;
    const activityList = activities.map((act, idx) => {
        return <ActivityTemplate key={idx} activity={act}/>;
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
        </div>);
};

export default RoutineTemplate;