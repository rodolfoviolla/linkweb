import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = ({ title, src }) => (
  <header id="header">
    
    {(src === 'main') && <div id="actions">
      <span id="menu"></span>
      <Link id="add" to={'/add'}></Link>
    </div>}

    {(src === 'add') && <div id="actions">
      <span id="back"></span>
      <Link id="cancel" to={'/'}></Link>
    </div>}

    <div id="title">
      {title}
    </div>
  </header>
)

export default Header