import React, {useState, useContext} from 'react';
import UserContext from "../context/UserContext"
const NavBar = (props) => {
    const context = useContext(UserContext)
    return(
        <>
        <h1> this is a nav bar</h1>
        <ul>
            <li>link1</li>
            <li>link2</li>
            <li>Hi {context['appState'].userName}</li>
        </ul>
        </>
    );
}

export default NavBar