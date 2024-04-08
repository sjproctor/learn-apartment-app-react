import React from "react"
import { Link } from "react-router-dom"

const NavButton = ({ url, buttonContent }) => {
  return (
    <Link to={url}>
      <button className="nav-button handrawn-font form-buttons">
        {buttonContent}
      </button>
    </Link>
  )
}

export default NavButton
