// Code SimpleComponentHere Here
import React from "react"

export default class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }
  clickHandler = (e) => {
    this.setState({
      mood: "sad"
    })
  }
  render(){
    return(
      <div onClick={this.clickHandler}>
        {this.state.mood}
      </div>
    )
  }
}
