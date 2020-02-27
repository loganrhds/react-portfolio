import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Logan Rhoades Portfolio</h1>
        <h2>Current Time </h2>
          <div>        
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </div>
      </div>
    );
  }
}
