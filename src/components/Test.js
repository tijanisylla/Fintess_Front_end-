import React,{ useState } from 'react'
import URL from './URL'
import axios from 'axios'
import ReactDOM from 'react-dom'
import JWT from 'jsonwebtoken'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Test = ()=>{ 

return 
const api = axios.create()
 api.get(URL)
 .then(res => {
   const data = res.data
   console.log(data)
 
   
 })

}
 export default Test