import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agencies from './pages/Agencies'
import Funds from './pages/Funds'
import Communication from './pages/Communication'
import Reports from './pages/Reports'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agencies" element={<Agencies />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
