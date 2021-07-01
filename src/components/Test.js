import React,{ useState } from 'react'
import URL from './URL'
import axios from 'axios'

import ReactDOM from 'react-dom'
import JWT from 'jsonwebtoken'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const Test = async () =>  { 
//   return


const Test = () => {
const [count, setCount] = useState(0)
const [text, setText]  = useState()

console.log('hello')
function decrement(){
  setCount(count - 1)
}
function increment () {
  setCount(count + 1)

  if(count >= 10){
    console.log('good job!')
  }
}

function post() {
  setText('Post')
}
function comments() {
  setText('Comments')
}
// axios 



  return(
    
  <>
  
   <h2>hello </h2>

   <button onClick= { decrement }> - </button>
   <span> {count} </span>
   <button onClick={ increment }>+</button>
   <br/>
   <br/>
   <br/>
   <button onClick={post} >Post</button>
  
   <button onClick={comments}  >comments</button>
   <span> { text } </span>
   
 </>
  )
}

//  axios.post(url,data, {
//   headers: {
//       'authorization': your_token,
//       'Accept' : 'application/json',
//       'Content-Type': 'application/json'
//   }
// })
//

 export default Test