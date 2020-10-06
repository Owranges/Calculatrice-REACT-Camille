import React, { Component } from "react";
import Result from "./Result";
import KeyPad from "./KeyPad";
import { Parser } from "expr-eval";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (Parser.evaluate(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Simple Calculator</h1>
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// function App (){
//   return <div></div>
// }
export default App;
