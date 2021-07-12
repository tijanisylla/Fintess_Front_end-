
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
        passConfirm, setPassConfirm,
        setLoggedIn
    } = fields;

    try {
        // Check if the password and confirmation match
        if (pass !== passConfirm) {
            setPass('');
            setPassConfirm('');
            return setError('*Passwords must match!');
        };

        const { data } = await axios({
            method: 'POST',
            url: `${url}/api/users/register`,
            data: {
                username: `${name}`,
                password: `${pass}`
            }
        });
        
        localStorage.setItem('Token', data.token);
        localStorage.setItem('User', data.user.username);
        setLoggedIn(true);

        history.push('/');
    } catch (error) {
        setError('*User already exists!');
        setName('');
        setPass('');
        setPassConfirm('');
    };
};



const Register = ({ loggedIn, setLoggedIn }) => {
    let history = useHistory();

    const [ error, setError ] = useState('');
    const [ name, setName ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ passConfirm, setPassConfirm ] = useState('');

    // Checks if a user is logged in and redirects
    useEffect(() => {
        if (loggedIn) {
            location.assign('/');
        };
    }, []);

    const submitReg = (event) => {
        event.preventDefault();

        const fields = {
            history,
            setError, name, setName, pass, setPass, 
            passConfirm, setPassConfirm, setLoggedIn
        };

        handleSubmit(fields);
    };

    return (<>
        <form id='register' className='user-table' onSubmit={submitReg}>
            <h3>Registration</h3>
            
            <p className='error'>{error}</p>
            <label htmlFor='username'>Username:</label>
            <input type='text' placeholder='username' minLength={4} required 
            value={name} onChange={(e) => setName(e.target.value)}/>
                
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='password' minLength={8} required
            value={pass} onChange={(e) => setPass(e.target.value)}/>

            <label htmlFor='pass-confirm'>Confim Password:</label>
            <input type='password' placeholder='confim password' minLength={8} required
            value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}/>
            
            <button id ='btn-login' type='submit'>Submit</button>
            <p>Already have an account? <Link id='log-in' to='/login'>Log In!</Link></p>   
        </form>
    </>);
};

/*
//////////////
// Exports //
////////////
*/

export default Register;