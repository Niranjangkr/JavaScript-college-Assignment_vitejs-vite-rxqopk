import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  delHeader  = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }

    return (
      <div>
        {myHeader}
        <button onClick={this.delHeader}>click me</button>
      </div>
    );
  }
}

class Child extends React.Component {
  
  render() {
    return <h1>Header</h1>;
  }
  

  componentWillUnmount() {
    alert('Header is  going to be deleted');
  }

}

export default Container;