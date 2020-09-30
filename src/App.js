import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js';
import Login from './Login.js';
import './App.css';
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
          <Login/>
        ) : (
          <>
            <Header/>

            <div className="App__body">
              <Sidebar/>
              <Feed/>
              <Widget/>
            </div>
          </>
      )}
    </div>
  );
} 

export default App;



