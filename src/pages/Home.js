import React from "react"
import apartments from "../assets/jan-jakub-nanista-unsplash.jpg"

const Home = () => {
  return (
    <div className="page-body center-content">
      <h1 className="title-header">Home Sweet Home.</h1>
      <img
        src={apartments}
        alt="tiled pattern of blue windows on a tan building"
        className="home-apartment-image"
      />
    </div>
  )
}

export default Home
