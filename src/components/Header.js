import React from 'react'
import '../css/count.css'
import Home from './Home'


export default function Header() {
    return (
        <div>
            <header>
               
            <Link to='/test'>Test</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
            </header>
        </div>
    )
}
