import React from 'react';

class CarUpdate extends React.Component {
  constructor() {
    super();
    this.state = { color: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'green' });
    }, 2000);

    setInterval(() => {
      this.setState({ color: this.state.color == 'red' ? 'green' : 'red' });
    }, 2000);
  }

  render() {
    return (
      <div>
        <div id="div1">Previous State: </div>
        <div id="div2">Current State: </div>
        <font color={this.state.color}>
          <h1>Color Changing</h1>
        </font>
      </div>
    );
  }
}

export default CarUpdate;
