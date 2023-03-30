// ther is a  error in this file 

import React from 'react';
import PropTypes from 'prop-types';
class Validation extends React.Component {
  render() {
    let h = this.props.paid ? 'paid' : 'Not-paid';
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        {h}
      </div>
    );
  }
}

export default Validation;
Validation.defaultProps = {
  name: 'Niranjan',
  age: 21,
  paid: true,
};

Validation.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  paid: PropTypes.bool,
};
