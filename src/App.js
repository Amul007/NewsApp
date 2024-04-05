import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='neww'> 
         <NavBar/>
         <News/>
        </div>  
    )
  }
}
