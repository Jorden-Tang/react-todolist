import React, {useState, useEffect, useContext} from 'react';
import UserContext from "../context/UserContext"
const Forms = (props) =>{
    const context = useContext(UserContext)
    const [formState, setFormState]= useState({
        userName : ""
    })
    
    const onChangeHandler = event => {
        context['appSetState']({userName: event.target.value});        
    }
    
    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
        <h1> this is a form</h1>
        <form onSubmit={onSubmitHandler}>
                <input type="text" name="userName" onChange={onChangeHandler}/>
                <br/>        
                <input type="submit" />     
            </form>
        </>
    );
}
export default Forms