import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

function App() {

  const { user }  = useSelector(state => state.userState)

  return (
    <div className="app">
      <Header />

      {!user 
        ? <Login />
        : (
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )
      } 

    </div>
  );
}

export default App;
