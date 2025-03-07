//import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar/header_navbar.tsx"
import LandingPageBanner from "./components/Banner/landingPageBanner.tsx"
import ReservationPanel from "./components/ReservationPanel/MainPanel.tsx"
import TypesOfStayPanel from './components/Types_of_stay/typesOfStayPanel.tsx'
import RegionsPanel from './components/RegionsPanel/regionsPanel.tsx'
import NewsPanel from './components/NewsPanel/newsPanel.tsx'

function App() {
  return (
    <>
      <Navbar language="hr" loggedIn={false} />
      <LandingPageBanner />
      <ReservationPanel />
      <div className='ml-[50px]'>
        <TypesOfStayPanel />
        <RegionsPanel />
      </div>
      <NewsPanel/>
    </>
  )
}

export default App
