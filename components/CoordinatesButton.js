import React from 'react';

class CoordinatesButton extends React.Component {
  // var coordinates = this.props.onReceiveCoordinates(event) {
  //   return ([event.clientX, event.clientY])
  // }

  clickHandler(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      // <button onClick={coordinates}></button>
      <button onClick={this.clickHandler.bind(this)}></button>      
    )
  }
}

export default CoordinatesButton;
