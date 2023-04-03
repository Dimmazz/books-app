import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {

  const nav = useNavigate()

  return (
    <header className="header">
      <h1 className="header__name" onClick={_e => nav(`/`)}>Books</h1>
    </header>
  )
}

export default Header