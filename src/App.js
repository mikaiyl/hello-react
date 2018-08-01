import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Keys name='mikaiyl' color='red' />
        </p>
      </div>
    );
  }
}

class Keys extends Component {
    render() {
        return (
            <div>
                <p style={{color:this.props.color}} >
                    <h1>Hello, { this.props.name }</h1>
                    <h1>Your favorite color is { this.props.color }</h1>
                </p>
            </div>
        )
    }
}

export default App;
