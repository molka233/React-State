import React, { Component } from 'react'
import Person from './component/Person'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
  }
  handelclick=()=>this.setState({show:!this.state.show})
  render() {
    return (
      <div className="checkpoint-container">
        <h2 className="text-center my-4">Checkpoint State</h2>
        <div className="checkpoint-content">
          <button onClick={this.handelclick} className="btn btn-primary">
            Show/Hide
          </button>
          {this.state.show ? <Person /> : null}
          </div>
      </div>
    );
  };
}

