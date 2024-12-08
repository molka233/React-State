import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            FullName:"Molka",
            Bio:"FullStacksJs",
            Profession:"Developer",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gaY9Z4mBtqowFUai0t_iFu_ckVzmFonfkw&s"
        }
        this.state={count:0}
    }
    componentDidMount() {
        setInterval (() => {
this.setState(prevState =>({
    count:prevState.count+1
}))
},1000)
    }
  render() {
    return (
      <div>
        <h2>{this.person.FullName}</h2>
        <h2>{this.person.Bio}</h2>
        <h2>{this.person.Profession}</h2>
        <img src={this.person.img} alt="Person" style={{ maxWidth: "100%", height: "auto" }}/>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
