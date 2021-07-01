import axios from 'axios'
import {  React, useState, useEffect }from 'react'
import {useHistory, Link} from 'react-router-dom'
import { API }  from './URL'
// import { checkLogin } from './Utils'

const Register = () => {

    let history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const pass = event.target[1].value;
        
        
            let { data } = await axios.get(`https://fitnesstrac-kr.herokuapp.com/api.users/me`, {
                         headers: {
                             'Content-Type': 'application/json',
                             'Authorization': `Bearer ${token}`
                         }
                     })
        body: JSON.stringify({
            user: {
            username: `${name}`,
            password: `${pass}`
            }  
        })
        
        
        .catch(console.error);
        history.push("/posts")
    };

    return (
        <>
            <form id="register"  onSubmit={handleSubmit}>
                <h3>Registration</h3>

                <label  htmlFor="username">Username:</label>
                <input type="text" placeholder="username" minLength={4} required/>
                
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="password" minLength={8} required/>
            
                <button id="btn-register" type="submit">Register</button>

                <p>Back to <Link id="lgn" to="/login">Log-In</Link></p>
            </form> 
        </> );
};

export default Register;
// async function getUser(token) {
//     let { data } = await axios.get(`${API_URL}/api.users/me`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     });

//     return data;
    
// };
// // console.log(data)
// // let token = localStorage.getItem('Token')
//     // let history = useHistory()
//     const handleSubmit  = async (e) => {
//          e.preventDefault()
//          const name = e.target[0].value 
//          const pass = e.target[1].value
//         //  const userApi = 'http://fitnesstrac-kr.herokuapp.com/routines'
  
//         const body = {
//             username : `${name}`,
//             password : `${pass}`
            
//         }
 
//         console.log(body)
    
       
    

  
    
// }
// // async function postData(){

// //     try {
// //     const res = await axios.get(API_URL)
// //     console.log(res.data) 
// //     return res
// //     }catch(err){
// //         console.error(err)
// //     }
  
// // }
// // postData()

// const Register = () => {

//     const [ data, setData ]  = useState([])
//   useEffect( async () => {
    
//      setData( getUser)
//     }, [])
  

// return(

  
//     <>

//        <h1> Register </h1>
//        <form id="register"  onSubmit={handleSubmit}>
//                 <h3>Registration</h3>

//                 <label  htmlFor="username">Username:</label>
//                 <input type="text" placeholder="username" minLength={4} required/>
                
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" placeholder="password" minLength={8} required/>
            
//                 <button id="btn-register" type="submit">Register</button>

//                 <p>Back to <Link id="lgn" to="/login">Log-In</Link></p>
//             </form> 
//         </>
//          );
  

    
// }


// export default Register