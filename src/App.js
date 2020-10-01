import React from 'react';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Feed from './Components/Feed/Feed.js';
import Widget from './Components/Widget/Widget.js';
import Login from './Components/Login/Login.js';
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



