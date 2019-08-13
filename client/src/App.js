import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';

const App = (props) => {
  return (
    <div>

        <Route exact path='/' render={Home} />
        <Route path='/list' render={()=><List />} />

    </div>
  )
}


export default App;