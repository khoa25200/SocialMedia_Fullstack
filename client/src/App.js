import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import Chat from "./pages/Chat/Chat";
import { getServerStatus } from './api/CheckServerRunning';
import Loading from "./components/Loading/Loading";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  const [render, setRender] = useState('');
  useEffect(() => {
    handleServerStatus()
  }, []);
  const handleServerStatus = async () => {
    const { data } = await getServerStatus();
    setRender(data)
  }
  return (
    render === 'Server is running' ? <div
      className="App"
      style={{
        height:
          window.location.href === `${process.env.REACT_APP_PUBLIC_BASEURL}/chat`
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div> : <Loading />
  )
}

export default App;
