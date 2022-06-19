import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';

import AddTodoComponent from './components/addToDo.components';
import ViewTodoComponent from './components/viewTodo.components';

class App extends Component {
  render() {
    return (

      <div className="container">
        <AddTodoComponent />
        <ViewTodoComponent />
        </div>
    );
  }
}

export default App;