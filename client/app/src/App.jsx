import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Home from "./components/Home";
import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [input, setInput] = useState('')

  return (
    <div className="relative w-full h-screen flex flex-col items-start gap-4">
      <BrowserRouter>
        <Header setInput={setInput} />
        <div className="flex flex-col w-full h-screen items-start justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" />
            <Route path="/register" />
            <Route path="/profile/:id" /> */}
            <Route path="/book/:id" element={<Book />} /> 
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
