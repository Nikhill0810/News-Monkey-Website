
import './App.css';
import React, { Component } from 'react'
import Navbar from './Newscomponents/Navbar';
import News from './Newscomponents/News';

export default class 
 extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}


