import React from 'react'

const Routine = () =>  {
    return (
        <div>
            <h1>Routine</h1>
        </div>
    )
}
export default  Routine

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import './routines.css'

// /*
//     I've put this axios function outside of the component, but it can go inside the useEffect if you want
//     Mainly I like it outside.  In fact, it might be good to put all the axios calls in a seperate
//     folder for ease of use (and import them in as needed)
// */
// async function getRoutines() {
//   let { data } = await axios.get(
//     'http://fitnesstrac-kr.herokuapp.com/api/routines'
//   )
//   return data
// }

// /*
//     All Routines component - displays the routines
// */
// const Routines = () => {
//   const [routines, setRoutines] = useState([]) // initially it is empty array

//   // for pagination.. not required
//   const [page, setPage] = useState(0) // load 10 per page

//   /*
//     useEffect runs once the page loads.  If you do not put the [] as the second argument it will
//     run once for every time the component re-renders (which happens a lot).
//   */
//   useEffect(() => {
//     // async function required for awaiting the routes
//     async function getAllRoutines() {
//       let data = await getRoutines()
//       setRoutines(data) // when we have the data, set it in our components variable
//     }

//     // call the inner function once to start the process
//     getAllRoutines()

//     // console.log('USE EFFECT RUNS ONCE')
//   }, [])

//   //   console.log(routines)

//   // pagination example (this does 10 per page)
//   let limmitedRoutines = routines.slice(0 + page * 10, page * 10 + 10)

//   // Creates a <SingleRoutine /> component for every routine in our arrray
//   let displayRoutines = limmitedRoutines.map((r, idx) => {
//     return <SingleRoutine key={idx} routine={r} />
//   })
//   // vvvvv  ---used below in the render -- vvvvvv

//   return (
//     <div className='routines'>
//       {/* Button is for pagination */}
//       <button onClick={() => setPage(page + 1)}>Next 10</button>
//       {displayRoutines}
//     </div>
//   )
// }

// /*
//     This should probably be in its own file but I put it here for convineince during the demo
//     Renders a single routine.  Used in the map above ^^^
// */
// const SingleRoutine = ({ routine }) => {
//   const activities = routine.activities

//   // same thing as mapping routines but for activities
//   let displayActivities = activities.map((a, idx) => {
//     return <Activity key={idx} activity={a} />
//   })

//   return (
//     <div className='routine'>
//       <h1>{routine.name}</h1>
//       <h2>Creator: {routine.creatorName}</h2>
//       <h3>Goal: {routine.goal}</h3>
//       <ul>{displayActivities}</ul>
//     </div>
//   )
// }

// const Activity = ({ activity }) => {
//   return (
//     <li className='activity'>
//       <h3>{activity.name}</h3>
//       <h3>{activity.description}</h3>
//     </li>
//   )
// }

// //  The only thing to export here is the routines component.  The other components are being used internally
// //  so they dont need their own exports.
// export default Routines