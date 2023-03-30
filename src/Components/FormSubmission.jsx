import React from 'react';

class FormSubmission extends React.Component {
  constructor() {
    super();
    this.state = { rollno: '', name: '', age: '', submitFlag: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitFlag: true });
    // const { rollno, name, age, submitFlag } = this.state;
  };

  render() {
    let details;
    const { rollno, name, age, submitFlag } = this.state;
    if (submitFlag) {
      details = (
        <h1>
          {name}-{rollno}
        </h1>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="rollno" onChange={this.handleChange} />
        <input type="text" name="name" onChange={this.handleChange} />
        <input type="text" name="age" onChange={this.handleChange} />
        <button type="suubmit">Submit</button>
        {details}
      </form>
    );
  }
}
export default FormSubmission;
