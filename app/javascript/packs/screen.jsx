import 'react-simple-keyboard/build/css/index.css';
import Keyboard from 'react-simple-keyboard';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class App extends Component {
  onChange = (input) => {
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  }

  render(){
    return (
      <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
