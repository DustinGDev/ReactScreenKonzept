import React, { Component } from 'react';
import Test1 from './ExampleScreenSetup/Test1.js';
import Test2 from './ExampleScreenSetup/Test2.js';
import './css/App.css';

class App extends Component {
  state = {
    Screen: Test1,
    timer: 120
  }

  componentDidMount() {
    setInterval(() => {
      let newScreen = this.state.Screen === Test1 ? Test2 : Test1;
      this.setState({Screen: newScreen})
      }, 5000);

      this.interval = setInterval(() => this.setState({timer: this.state.timer - 1}), 1000);
  }

  render() {
    let Screen = this.state.Screen;

    return (
      <div className="App">
        <div className="screen">
          <Screen timer={this.state.timer}/>
        </div>
      </div>
    );
  }
}

export default App;
