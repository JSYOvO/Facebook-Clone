import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="App__body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
} 

export default App;



