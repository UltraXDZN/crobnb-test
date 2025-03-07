//import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar/header_navbar.tsx"
import LandingPageBanner from "./components/Banner/landingPageBanner.tsx"
import ReservationPanel from "./components/ReservationPanel/MainPanel.tsx"

function App() {
  return (
    <>
        <Navbar language="hr" loggedIn={false} />
        <LandingPageBanner/>
        <ReservationPanel/>
    </>
  )
}

export default App
