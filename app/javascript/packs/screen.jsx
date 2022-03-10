import 'react-simple-keyboard/build/css/index.css';
import Keyboard from 'react-simple-keyboard';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class InputBoard extends Component {
  state = { input: "" }

  onChange = (input) => {
    console.log("Input changed", input);
    this.setState({ input: input });
  }

  onKeyPress = (button) => {
    if(button == "{enter}") {
      // Send this.state.input to backend
      // reset input
    }
    console.log("Button pressed", button);
  }

  render() {
    return (
      <>
        <Keyboard
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          layout={{
            default: ["! Q W E R T Y U I O P {bksp}", "A S D F G H J K L {enter}", "Z X C V B N M , .", "{space}"], // "{bksp}"
            shift: ["! Q W E R T Y U I O P {bksp}", "A S D F G H J K L {enter}", "Z X C V B N M , .", "{space}"]
          }}
        />
        <textarea
          className="pi-screen-textarea"
          readOnly
          rows="1"
          value={this.state.input}
        />
      </>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <InputBoard />,
    document.body.appendChild(document.createElement('div')),
  )
})
