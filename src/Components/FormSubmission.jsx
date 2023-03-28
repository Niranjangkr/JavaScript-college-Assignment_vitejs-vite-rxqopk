import React from "react"

class FormSubmission extends React.Component{
  constructor(){
    super()
    this.state = {rollno: "", name: "", age: "", submitFlag: false} 
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value}) 
  }

  handleSubmit =(e) => {
    e.prevetDefault()
    this.setState({submitFlag: true})
    const{rollno, name, age, submitFlag} = this.state;
  }

  render(){
    let details;
    const {rollno, name, age, submitFlag}
    if(submitFlag){
      details = <h1>{name}-{rollno}</h1>
    }
    return(
      
    )
  }
}