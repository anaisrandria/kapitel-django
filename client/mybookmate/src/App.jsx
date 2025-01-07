import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-start gap-4 ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" />
          <Route path="/register" />
          <Route path="/profile/:id" />
          <Route path="/book/:id" /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
