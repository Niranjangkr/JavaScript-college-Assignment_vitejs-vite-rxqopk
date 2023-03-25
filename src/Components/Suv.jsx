import React from 'react';
class Suv extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   brand: this.props.brand,
    //   model: this.props.model,
    //   color: this.props.color
    // }

    this.state = props;
  }
  changeColor = () => {
    this.setState({
      color: this.state.color == 'red' ? "green" : "red",
    });
  };
  render() {
    return (
      <>
        <font color={this.state.color}>
          <h1>
            {this.state.brand}-{this.state.model}
          </h1>
        </font>
        <button onClick={this.changeColor}>click Me</button>
      </>
    );
  }
}

export default Suv;
