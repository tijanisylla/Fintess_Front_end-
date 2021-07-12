
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import siteUrl from './url';



async function getUser(token) {
    let { data } = await axios.get(`${siteUrl}/api/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return data;
};

function displayUserData(userData) {
    return ( <>
        <h1>ID: {userData.id}</h1>
        <h1>Username: {userData.username}</h1>
    </>);
};



const Home = ({ loggedIn }) => {
    const token = localStorage.getItem('Token');

    // States
    const [userData, setUserData] = useState({})

    // Fetch user info from database on component load
    useEffect(() => {
        async function getMyInfo() {
            if (token) {
                let data = await getUser(token);
                setUserData(data);
            };
        };

        getMyInfo();
    }, []);

    // Insert user info into template
    const userInfo = displayUserData(userData);

    return (<>
        <div id='user-info'>
            {loggedIn ? userInfo : null}
        </div>

        <div id='welcome'>
            <h1>Welcome to Fitness Tracker</h1>
           
        </div>
    </> );
};

export default Home;