import React from 'react';
import { Route } from 'react-router-dom';


import './css/App.css';
import ContentPage from './components/ContentPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';


const App = (props) => {
  return (
    <div id="app">
        <Route path='/' render={Header} />
        <Route exact path='/' render={ContentPage} />
        <Route path='/' render={SideBar} />
        <Route path='/' render={Footer} />
    </div>
  )
}


export default App;