import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Home from "./components/Home";
import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])

    const fetchGoogleBooksApi = async() => {
      const api_url = `https://books.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&printType=books&key=${import.meta.env.VITE_API_KEY}`
      const response = await fetch(api_url)
      const data = await response.json()

      console.log("🐣 data is:", data)
      setResults(data || [])
      console.log("🐙 input is:", input)
      console.log(api_url)
    }

    useEffect(() => {

      const timer = setTimeout(() => {
        if (input) {
            fetchGoogleBooksApi();
        } 
      }, 3000);

      return () => clearTimeout(timer)
      
      console.log("🟢 results is:", results)
    }, [input]);

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log("🐯 set input is:", e.target.value) 
    };

  return (
    <div className="relative w-full h-screen flex flex-col items-start gap-4">
      <BrowserRouter>
        <Header results={results} handleInput={handleInput} />
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
