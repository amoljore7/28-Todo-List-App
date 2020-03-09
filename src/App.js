import React, { Component } from "react";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    console.log(">>>Inside of Component Did Mount>>");
    
  }

  componentWillUnmount() {
console.log(">>>inside of component Will Mount>>>");
  }
  render() {
    return (
      <div>
          <TodoInput />
          <TodoList />
      </div>
    );
  }
}

export default (App);

