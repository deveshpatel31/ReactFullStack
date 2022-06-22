import React, { Component } from 'react';
import Counter from './components/counter/Counter';
import LearningComponents from './components/learning-examples/LearningComponents';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter/>
      </div>
    );
  }
}

export default App;