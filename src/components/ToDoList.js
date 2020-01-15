import React, {useState} from 'react';
import { render } from '@testing-library/react';
import ToDoItem from "./ToDoItem"

const ToDoList = (props) =>{
    const [state, setState] = useState({
        taskList: []
    })
    const [taskInput, setTaskInput] = useState("");

    const handleAddTask = (event) =>{
        event.preventDefault();
        setState({taskList: [...state.taskList, {taskText: taskInput, isComplete: false}]})
    }

    const onChangeHandler = (event) =>{
        event.preventDefault();
        setTaskInput(event.target.value);
    }

    const deleteTask = (event, index) =>{
        event.preventDefault();
        const remain = state.taskList.filter((item, i) => i != index)
        setState({
            taskList: remain
        })
    }
    
    const checkTaskHandler = (event, index) =>{
        
        state.taskList[index].isComplete = !state.taskList[index].isComplete;
        setState({
            taskList: [...state.taskList]
        })
    }
    const crossOutStyle = {textDecoration: "line-through"};
    return(
        <div>
            {state.taskList.map((item, i) => {
                return(
                    <form>  { !item.isComplete ?
                            <ToDoItem text = {item.taskText} key = {i} style = {{}}></ToDoItem> :
                            <ToDoItem text = {item.taskText} key = {i} style = {crossOutStyle}></ToDoItem>
                            }
                            <input type="checkbox" onChange = {(event) => { checkTaskHandler(event, i)}}></input>
                            <button onClick ={(event) => {deleteTask(event, i)}}>Delete Task</button>
                    </form>
                )
            })}
            <form onSubmit = {handleAddTask}>  
                <label>Task</label>
                <input type = "text" onChange = {onChangeHandler}></input>
                <input type = "submit"></input>
            </form>
        </div>
    )
}

export default ToDoList