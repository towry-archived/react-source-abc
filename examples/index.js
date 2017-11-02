
import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {

  handleClick(e) {
    console.log(e.pageX);
  }

  render() {
    const styles = {
      border: '1px solid red',
      width: 100,
      height: 100,
    };

    return (
      <div onClick={ this.handleClick } style={ styles }>
        <span>box 1</span>
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Box />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.app'));
