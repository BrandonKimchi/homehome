import React, { Fragment } from 'react'

class Page extends React.Component {
  render() {
    return <Fragment>
      <HeaderBar title="Test"/>
      <div>Body stuff</div>
    </Fragment>;
  }
}

class HeaderBar extends React.Component {
  render() {
    return <div><h1>{this.props.title}</h1></div>
  }
}

export default Page
