import React, { Component } from "react";

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
          Hello world
      </div>
    );
  }
}

export default (App);

