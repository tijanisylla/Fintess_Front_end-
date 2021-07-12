

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as All from './components';
import './index.css'


function checkLocalLoggedIn(setLoggedIn) {
    if (localStorage.getItem('User') && localStorage.getItem('Token')) {
        return setLoggedIn(true);
    };
};



const App = () => {
    // States
    const [ loggedIn, setLoggedIn ] = useState(false);

    // Check if the user is stored locally on page load
    useEffect(() => {
        checkLocalLoggedIn(setLoggedIn);
    }, []);

    // Initialize user state and log out locally
    function logOut(event) {
        event.preventDefault();
        
        localStorage.removeItem('User');
        localStorage.removeItem('Token');

        location.assign('/');
    };

    return (<>
        <div id='app'>
            <h1 id='logo'>Fitness Trac.kr</h1>
            <div id='background'></div>
            <Router>
                <All.Nav loggedIn={loggedIn} logOut={logOut}/>
                <main>
                    <Switch>
                        <Route path='/activities' render={ () =>  <All.Activities loggedIn={loggedIn}/> }/>
                        <Route path='/login' render={ () =>  <All.Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }/>
                        <Route path='/my-routines' component={All.MyRoutines} />
                        <Route path='/register' render={ () => <All.Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }/>
                        <Route path='/routines' component={All.Routines}/>
                        <Route path='/' render={ () => <All.Home loggedIn={loggedIn}/>} />
                    </Switch>
                </main>
            </Router>
        </div>
        <All.Footer/>
    </>);
};

ReactDOM.render( <App/>, document.getElementById('root') );