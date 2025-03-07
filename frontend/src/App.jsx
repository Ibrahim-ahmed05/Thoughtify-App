import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import Mainpage from './components/Mainpage'
import Contact from './components/Contact'
import Register from './components/Register'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreatePost from './components/CreatePost';
import Post from './components/Post'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePost/>}/>
          <Route path="/Mainpage" element={<Mainpage/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Post/:id" element={<Post/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
