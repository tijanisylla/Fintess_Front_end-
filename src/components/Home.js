import {React,useState, useEffect}from 'react'
import {API} from './URL'
import axios from 'axios'
import { Router, Link, BrowserRouter } from 'react-router-dom'
import { data } from 'browserslist';


let token = localStorage.getItem('token')
  async function gettingUser() {
    // fetch data from a url endpoint
    try{
    const data = await axios.get(`${API}/api.users/me`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    });
    return data

    let id = data[0].id  
    //  console.log('DATA',id)
   


    return data
    
   
  } catch(error){
      console.log(error)
  }
}

console.log('DATA User',data)


  

const Home = () =>  {
  const [data, setData] = useState([])

  useEffect(async () => {
    setData( await gettingUser() ) 
    
  }, [])

// console.log(data)

    return (
        <>
        
            <header>
            
               <Link to='/test'>Test</Link>
               <Link to='/login'>Login</Link>
               <Link to='/logout'>Logout</Link>
               <Link to='/register'>Register</Link>
              
               </header>
           <main>
            




              <h1>Home</h1>


           </main>
          
          
            <h3>{}</h3>
            




            
            


       
        </>
    )
}
export default  Home