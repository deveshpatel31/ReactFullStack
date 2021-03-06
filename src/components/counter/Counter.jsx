import React, { Component } from "react"
import './Counter.css'

class Counter extends Component{
    
    //Defining the initial state 
    constructor() {
        super(); // Error 1
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }
    render  ()  {
        return (
            <div className="counter">
              <button onClick={this.increment}>+1</button>
              <span className="count">{this.state.counter}</span>
            </div>
          );
    }
    increment ()  {
        console.log('increment');
        this.setState({
            counter: this.state.counter+1
        });
    }    
  }

export default Counter