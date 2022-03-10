import 'react-simple-keyboard/build/css/index.css';
import Keyboard from 'react-simple-keyboard';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class InputBoard extends Component {
  state = { input: "" }

  onChange = (input) => {
    this.setState({ input: input });
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if(button == "{enter}") {
      const token = document.querySelector('meta[name="csrf-token"]').content;
      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': token
        },
        body: JSON.stringify({ input: this.state.input })
      };
      fetch('http://localhost:3000/api/marquee', requestOptions)
        .then(async response => {
          console.log(response);
        }).catch(error => {
          console.error('There was an error!', error);
        });

      this.setState({ input: '' });
      this.keyboard.clearInput();
    }
  }

  render() {
    return (
      <>
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
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
