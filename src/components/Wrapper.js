import React, {useState, useEffect, useContext} from 'react';
import UserContext from "../context/UserContext"

const Wrapper = (props) =>{
    console.log(useContext(UserContext))
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Wrapper