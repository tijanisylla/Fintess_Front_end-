import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home,Test,Routine ,Login,Logout, Register,Activities,  Myroutine, Form, Notfound, Header } from './components'
import ReactDOM from 'react-dom'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






//useState
const App = () => {
  const [hello, world ] = useState([])

  return(
    

<Router>


<>


<Switch>

<Route  path="/" component={Home} exact={true}/>

<Route path="/" path="/test" component={Test} exact={true}/>
<Route exact  path="/register" component={Register} />
<Route exact  path="/form" component={Form} />
<Route exact path="/routine" component={Routine} />
<Route exact path="/login" component={Login} />
<Route exact path="/logout" component={Logout} />
<Route exact path="/activities" component={Activities} />
<Route exact path="/myroutine" component={Myroutine} />
<Route exact  component={Notfound} />
<Home/> 
</Switch>
 
 
  
  </>
  
  
</Router>
 )

  
  }


ReactDOM.render( <App/>,  document.getElementById('app')  )