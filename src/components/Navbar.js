import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const CLIENT_ID = "6h74cadedecr3cj1ks27rhmt39"
  const REDIRECT_URI = "https://mandymichel.github.io/green-wind-renewables"
  const DOMAIN = "greenwind.auth.us-east-1.amazoncognito.com"
  const loginUrl = `https://${DOMAIN}/login?client_id=${CLIENT_ID}&response_type=code&scope=email+openid+profile&redirect_uri=${REDIRECT_URI}`

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
          <NavLink to="/green-wind-renewables" onClick={closeMenu}>
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
          <a href={loginUrl} className="text-blue-600 font-semibold">
            Login
          </a>
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
