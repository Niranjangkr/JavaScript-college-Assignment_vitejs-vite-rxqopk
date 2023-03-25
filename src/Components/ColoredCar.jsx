import React from "react"

class ColoredCar extends React.Component{
  constructor(props){
    super(props)
    this.state = props
  }

  changeColor = (c) =>{
    console.log(c)
    this.setState({
      color: c 
    })
  }

  render(){
    return(
      <div>
        <font color = {this.state.color}>
          <ul>
            <li>{this.state.brand}</li>
            <li>{this.state.model}</li>
          </ul>
        </font>
        <button onClick= { ()=>{
          let color=prompt("Enter color:")
          this.changeColor(color)
        }}>change color</button>
      </div>
    )
  }
}

export default ColoredCar