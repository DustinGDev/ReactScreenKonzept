import React, {Component} from 'react';

class Header extends Component {

  render() {
    return(
      <div className="header container">
        {
          React.Children.map(this.props.children, child => React.cloneElement(child, this.props))
        }
      </div>
    )
  }
}

export default Header
