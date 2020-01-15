import React ,{useEffect, useState} from 'react';
import './App.css';
import TodoList from "./components/ToDoList";
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import FormWrapper from "./components/FormWrapper"
import {UserProvider, UserContext, UserConsumner} from "./context/UserContext"

function App() {

  const [state, setState] = useState({
    userName: ""
  });

  return (
    <div className="App">
      <UserProvider value = {{appState: state, appSetState: setState}}>
        <Wrapper>
          <NavBar></NavBar>
          <FormWrapper></FormWrapper>
        </Wrapper>
      </UserProvider>
    </div>
  );
}

export default App;
