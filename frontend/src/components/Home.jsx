import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <>
    <div className="video-container">
      <video src="/thoughts.mp4" autoPlay loop muted className="full-screen-video" />
      <div className="overlay">
        <h1 className="animated-text">THOUGHTIFY</h1>
        <h1 className="hometext">بول کہ لب آزاد ہیں تیرے </h1>
        <br></br>
        <Link to="/Register">
        <button className="btn">SIGNUP</button>
        </Link>
        <Link to="/Login">
        <button className="btn">LOGIN</button>
        </Link>
      </div>
    </div>
    </>
  )
}
