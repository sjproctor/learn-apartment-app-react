import React from "react"
import apartments from "../assets/jan-jakub-nanista-unsplash.jpg"

const Home = () => {
  return (
    <div className="page-body center-content">
      <h3 className="home-header">Home Sweet Home.</h3>
      <img
        src={apartments}
        alt="tiled pattern of blue windows on a tan building"
        className="home-apartment-image"
      />
    </div>
  )
}

export default Home
