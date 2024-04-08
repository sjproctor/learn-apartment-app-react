import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [users, setUsers] = useState(mockUsers[0])
  console.log(apartments)
  console.log(users)
  return (
    <>
      <Header />
      {/* <Routes>
        <Home />
        <NotFound />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
