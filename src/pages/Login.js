// pages/Login.js
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Login = () => {
  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const code = query.get("code")
    if (code) {
      console.log("Authorization code:", code)
      // Here you would exchange the code for tokens via your backend
    }
  }, [location])

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login Callback</h2>
      <p>Processing login…</p>
    </div>
  )
}

export default Login
