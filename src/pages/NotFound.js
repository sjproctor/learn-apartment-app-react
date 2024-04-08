import React from "react"
import NavButton from "../components/NavButton"
import key from "../assets/key.png"

const NotFound = () => {
  return (
    <div className="page-body center-content">
      <h2 className="title-header">Oops, Wrong Address!</h2>
      <NavButton url="/" buttonContent="Back Home" />
      <div>
        <img
          src={key}
          alt="gold skeleton key"
          className="not-found-key-image"
        />
      </div>
    </div>
  )
}

export default NotFound
