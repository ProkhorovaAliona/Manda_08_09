import React, { Component } from 'react';
import Header from 'components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('items', this.props.items)
    return (
    <div>
      Header 1
    </div>);
  }
}

export default App;
