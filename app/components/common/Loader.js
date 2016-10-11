import React, { Component } from 'react';
import ReactLoader from 'react-loader-advanced';

export default class Loader extends Component {
  render() {
    const spinner = <img src="http://www.ajaxload.info/cache/FF/FF/FF/00/6E/9A/36-1.gif" style={{ background: 'white', border: '3px solid white' }} />;

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
