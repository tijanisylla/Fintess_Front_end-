import React,{ useState, useEffect } from 'react'
import URL from './components/URL'
import Test from './components/Test'
import axios from 'axios'
import './css/count.css'
import ReactDOM, { render } from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



// const api = axios.create()
//  api.get(URL,'/')
//  .then(res => {
//    const data = res.data
//    console.log(data)
 
   
//  })


//useState
const App = () => {
const [count, setCount] = useState(0)
const [text, setText]  = useState()

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
  )}

<Test />
ReactDOM.render( <App />,  document.getElementById('app')  )