import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { auth } from "./firebase/firebase";
import { login , logout } from "./redux/userSlice";

function App() {

  const dispatch = useDispatch()
  const { user }  = useSelector(state => state.userState)

  useEffect(() => {
    
      auth.onAuthStateChanged((user) => {
        if(user){
            // User has sucessfully logged in
            dispatch(
              login({
                email:user.email,
                id: user.uid,
                displayName: user.displayName,
                photoUrl: user.photoURL,
              })
            )
        }else{
            dispatch(logout())
        }
      })

  }, [dispatch])

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
