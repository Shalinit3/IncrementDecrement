import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const mapStateToProps = (state = []) => {
  return {...state};
}

class App extends Component {

  
  handleInc = () => {
      const { dispatch } = this.props
      dispatch(increment())
  }

  handleDec = () => {
    const { dispatch } = this.props
    dispatch(decrement())
  }

  render() {
    const { incDec } = this.props
    return (
      <div className="App">
        <h1> { incDec[incDec.length-1].value }</h1>
        <div>
          <button onClick ={this.handleInc}> + </button> 
          <button onClick ={this.handleDec}> - </button>
        </div>
      </div>
     
    );
  }
}

App = connect(mapStateToProps)(App)

export default App
