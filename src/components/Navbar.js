import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="logo">Green Wind & Renewables</div>
      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink to="/wind" onClick={closeMenu}>
            Wind Power
          </NavLink>
        </li>
        <li>
          <NavLink to="/solar" onClick={closeMenu}>
            Solar Power
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/newsletter" onClick={closeMenu}>
            Newsletter
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
