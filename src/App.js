import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex.js"
import ApartmentShow from "./pages/ApartmentShow.js"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [user, setUser] = useState(null)

  const deleteApartment = (id) => {
    console.log(id)
  }
  const handleSignIn = (user) => {
    console.log(user)
  }
  const handleSignUp = (user) => {
    console.log(user)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apartments"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route
          path="/apartment/:id"
          element={
            <ApartmentShow
              apartments={apartments}
              deleteApartment={deleteApartment}
              user={user}
            />
          }
        />
        <Route
          path="/signin"
          element={<SignIn handleSignIn={handleSignIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp handleSignUp={handleSignUp} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
