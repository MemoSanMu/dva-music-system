import React, { Component } from 'react'
import './style.css'

export default ({ isShow = false }) => {
  return (
    <div className="loading-wrapper" style={{ display: isShow ? 'block' : 'none' }}>
      <div className="loadEffect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  )
}

