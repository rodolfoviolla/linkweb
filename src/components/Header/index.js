import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = ({ title, src }) => (
  <header id="header">
    <div id="title">
      {title}
    </div>
    <div id="button">
      {(src === 'main') && <Link id="add" to={'/add'}></Link>}
      {(src === 'add') && <Link id="cancel" to={'/'}></Link>}
    </div>
  </header>
)

export default Header