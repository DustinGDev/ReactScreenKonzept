import React, {Component} from 'react';

class EntertainmentArea extends Component {
  state = {
    timer: 120
  }

  render() {
    return(
      <div className="entertain container">
        {
          React.Children.map(this.props.children, child => React.cloneElement(child, this.state))
        }
      </div>
    )
  }
}

export default EntertainmentArea
