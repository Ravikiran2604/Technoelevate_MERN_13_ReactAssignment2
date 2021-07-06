import React, { Component } from 'react';

export default class Count extends Component {
    state = { 
        count: 0 
    };
           
    incr = () => {
                this.setState({ count: this.state.count + 1 })
                };
  
    decr = () => {
                this.setState({ count: this.state.count - 1 })
                };
  
  reset = () => { 
                this.setState({ count: 0 }) 
                };

    render() {
        return (
      <div>
        <p>{this.state.count}</p>
        <div>
          <button style={{background:"red",color:"black"}} onClick={this.incr}>+</button>
          <button style={{background:"orange"}} onClick={this.reset}>Reset</button>
          <button style={{background:"green",color:"black"}} onClick={this.decr}>-</button>
        </div>
      </div>
        );
    }
}

