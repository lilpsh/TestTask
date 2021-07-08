import React from 'react'
import {ReactComponent as Logo} from '../images/Logo.svg'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="headerTitle">Website Style Guide</h1>
    </header>
  )
}
export default Header;