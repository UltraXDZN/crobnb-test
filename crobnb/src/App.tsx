import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@components/layout'
import LandingPage from './pages/landingPage'
import SuccessPage from './pages/successPage'
import ErrorPage from './pages/errorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <Layout showFooter={true}>
            <LandingPage />
          </Layout>
        } />

        <Route path="/smjestaj" element={
          <Layout showFooter={true}>
            <LandingPage />
          </Layout>
        }>
          <Route path=":id/detalji" element={
            <Layout showFooter={true}>
              <LandingPage />
            </Layout>
          } />
        </Route>

        <Route path="/login" element={
          <Layout showFooter={true}>
            <LandingPage />
          </Layout>
        } />

        <Route path="/registracija" element={
          <Layout showFooter={true}>
            <LandingPage />
          </Layout>
        } />

        <Route path="/rezervacija-upit/:id" element={
          <Layout showFooter={true}>
            <LandingPage />
          </Layout>
        } />

        <Route path="/success" element={
          <Layout showFooter={false}>
            <SuccessPage />
          </Layout>
        } />

        <Route path="*" element={
          <Layout showFooter={false}>
            <ErrorPage code={404} message="Stranica koju tražite nije pronađena." />
          </Layout>
        } />


      </Routes>
    </BrowserRouter>
  )
}

export default App
