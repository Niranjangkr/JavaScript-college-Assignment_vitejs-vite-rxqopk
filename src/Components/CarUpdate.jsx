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

  getSnapshotBeforeUpdate(pp, ps) {
    document.getElementById('div1').innerHTML = `<p style = "color: ${ps.color};" > Previous State: ${ps.color}</p>`;
  }

  componentDidUpdate(){
    document.getElementById("div2").innerHTML = `<p style = "color: ${this.state.color};">Current State: ${this.state.color}</p>`
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
