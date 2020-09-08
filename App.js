import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: Math.floor(Math.random() * 1000) + 1,
      guess: 0
    }
    this.addHundred = this.addHundred.bind(this)
    this.addTen = this.addTen.bind(this)
    this.addOne = this.addOne.bind(this)
    this.subHundred = this.subHundred.bind(this)
    this.subTen = this.subTen.bind(this)
    this.subOne = this.subOne.bind(this)
    this.reset = this.reset.bind(this)
  }

  addHundred() {
    this.setState(prevState => {
      return {
        guess: prevState.guess + 100
      }
    })
  }

  addTen() {
    this.setState(prevState => {
      return {
        guess: prevState.guess + 10
      }
    })
  }

  addOne() {
    this.setState(prevState => {
      return {
        guess: prevState.guess + 1
      }
    })
  }

  subOne() {
    this.setState(prevState => {
      return {
        guess: prevState.guess - 1
      }
    })
  }

  subTen() {
    this.setState(prevState => {
      return {
        guess: prevState.guess - 10
      }
    })
  }

  subHundred() {
    this.setState(prevState => {
      return {
        guess: prevState.guess - 100
      }
    })
  }

  reset() {
    this.setState(prevState => {
      return {
        number: Math.floor(Math.random() * 1000) + 1,
        guess: 0
      }
    })
  }
  
  render() {
    let userMessage;
    if (this.state.guess === this.state.number) {
      userMessage = (
        <h3>You guessed the number!</h3>
      )
    } else if (this.state.guess > this.state.number) {
      userMessage = (
        <h3>Too high!</h3>
      )
    } else {
      userMessage = (
        <h3>Too low!</h3>
      )
    }

    return (
      <div className="App">
        <button onClick={this.reset}>start over</button>
        <button onClick={this.addHundred}>+100</button>
        <button onClick={this.addTen}>+10</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subOne}>-1</button>
        <button onClick={this.subTen}>-10</button>
        <button onClick={this.subHundred}>-100</button>
        <h1> {this.state.guess}</h1>
        { userMessage }
      </div>
    );
  }
}

export default App;
