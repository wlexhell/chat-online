import React from 'react'
import DocumentTitle from 'react-document-title';
export default class BasicLayout extends React.PureComponent {

  render() {
    return <DocumentTitle title='撩撩撩'>
             <div className="basic-layout">{this.props.children}</div>
           </DocumentTitle>
  }
}