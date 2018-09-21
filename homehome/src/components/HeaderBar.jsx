import React, { Fragment } from 'react'

class HeaderBar extends React.Component {
  render() {
    return (
      <div class="headerBar">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default HeaderBar
