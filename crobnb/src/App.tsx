//import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar/header_navbar.tsx"
import LandingPageBanner from "./components/Banner/landingPageBanner.tsx"

function App() {
  return (
    <>
        <Navbar language="hr" loggedIn={false} />
        <LandingPageBanner/>
    </>
  )
}

export default App
