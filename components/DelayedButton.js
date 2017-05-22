import React from 'react';

class DelayedButton extends React.Component {
  clickHandler(event) {
    event.persist()
    var callback = this.props.onDelayedClick

    setTimeout(function(){ callback(event); }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clickHandler.bind(this)}></button>
    )
  }
}

export default DelayedButton;
