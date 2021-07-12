

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import url from '../url';

import '../css/login-register.css';



async function handleSubmit(fields) {
    const {
        history,
        setError, name, setName, 
        pass, setPass, 
        setLoggedIn
    } = fields;

    try {
        const { data } = await axios({
            method: 'POST',
            url: `${url}/api/users/login`,
            data: {
                username: `${name}`,
                password: `${pass}`
            }
        });
        
        localStorage.setItem('Token', data.token);
        localStorage.setItem('User', data.user.username);
        setLoggedIn(true)

        history.push('/');
    } catch (error) {
        setError('Username or Password is invalid');
        setName('');
        setPass('');
    };
};

/*
/////////////////
// Components //
///////////////
*/

const Login = ({ loggedIn, setLoggedIn }) => {
    let history = useHistory();

    const [ error, setError ] = useState('');
    const [ name, setName ] = useState('');
    const [ pass, setPass ] = useState('');

    // Checks if a user is logged in and redirects
    useEffect(() => {
        if (loggedIn) {
            location.assign('/');
        };
    }, []);

    const submitLogin = (event) => {
        event.preventDefault();

        const fields = {
            history,
            setError, name, setName, 
            pass, setPass, setLoggedIn
        };

        handleSubmit(fields);
    };

    return ( <>
        <form id='log-in' className='user-table' onSubmit={submitLogin}>
            <h3>Log-In</h3>
            
            <p className='error'>{error}</p>
            <label  htmlFor='username'>Username:</label>
            <input type='text' placeholder='username' minLength={4} required 
            value={name} onChange={(e) => setName(e.target.value)}/>
                
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='password' minLength={8} required
            value={pass} onChange={(e) => setPass(e.target.value)}/>
            
            <button id ='btn-login' type='submit'>Log-in</button>
            <p>Don't have an account? <Link id='sign-up' to='/register'>Sign up!</Link></p>     
        </form>
    </> );
};

export default Login;