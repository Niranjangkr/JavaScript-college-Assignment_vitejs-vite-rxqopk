import React from 'react';

class EventButton extends React.Component {
  constructor() {
    super();
    this.state = { color: 'pink' };
  }

  handleClick = (e) => {
    alert(e.target.name);
    this.setState({ color: e.target.name });
  };

  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: this.state.color, width: 80, height: 20 }}
        >
          change Color
        </div>
        <button name="red" onClick={this.handleClick}>
          Red
        </button>
        <button name="blue" onClick={this.handleClick}>
          Blue
        </button>
        <button name="green" onClick={this.handleClick}>
          Green
        </button>
      </div>
    );
  }
}

export default EventButton;
