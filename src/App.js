import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Wind from "./pages/Wind"
import Solar from "./pages/Solar"
import Login from "./pages/Login"
import Newsletter from "./pages/Newsletter"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/green-wind-renewables" element={<Home />} />
            <Route path="/wind" element={<Wind />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
