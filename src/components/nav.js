

import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

const Nav = ({ loggedIn, logOut }) => {
    return (
        <>
        <header>
        <div id='nav'>
            <div id='links'>
                <Link to='/'>Home</Link>
                <Link to='/activities'>Activities</Link>
                <Link to='/routines'>Routines</Link>
                {loggedIn ? <Link to='/my-routines'>My Routines</Link> : null}
                {loggedIn ? <button onClick={logOut}>Log Out</button> : null}
                {!loggedIn ? <Link to='/login'>Log In/Register</Link> : null}
            </div>
        </div>
        </header>
        </>
    );
};

export default Nav;