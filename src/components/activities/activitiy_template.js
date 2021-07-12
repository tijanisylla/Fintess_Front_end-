const ActivityTemplate = ({ activity }) => {
    // The template for each activity
    return (
        <li className='activity'>
            <h3>Name: {activity.name}</h3>
            <h3>Description: {activity.description}</h3>
            <h3>Count: {activity.count}</h3>
            <h3>Duration: {activity.duration}</h3>
        </li>);
};

export default ActivityTemplate;