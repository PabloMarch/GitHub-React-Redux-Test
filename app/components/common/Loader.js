import React, { Component } from 'react';
import ReactLoader from 'react-loader-advanced';

export default class Loader extends Component {
  render() {
    const spinner = <i className="glyphicon glyphicon-time" style={{ fontSize: '3em', display: 'block', color: '#337ab7' }} />;

    return (
      <ReactLoader
        show={this.props.isLoading}
        message={spinner}
        backgroundStyle={{backgroundColor: 'rgba(255, 255, 255, .4)'}}>

        {this.props.children}
      </ReactLoader>
    )
  }
}
