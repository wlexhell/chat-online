import React from 'react'

export default class UserLayout extends React.PureComponent {

  render() {
    return <div className="user-layout">{ this.props.children }</div>
  }
}