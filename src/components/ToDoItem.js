import React ,{useState} from 'react'

const ToDoItem = (props) =>{
    const [state, setState] = useState({});

    return(
    <span style = {props.style}>{props.text}</span>
    )
}
export default ToDoItem