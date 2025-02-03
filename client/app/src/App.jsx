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
    const [input, setInput] = useState("") // Input value
    const [results, setResults] = useState([]) // Results from search bar
    const [books, setBooks] = useState([]) // Books in local database
    const [clickedBook, setClickedBook] = useState({}) // Click book's google_book_id (from search results or status components)
    const [newComment, setNewComment] = useState("")
    const [isOpen, setIsOpen] = useState(false)


    const fetchGoogleBooksApi = async() => {
      const api_url = `https://books.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&printType=books&key=${import.meta.env.VITE_API_KEY}`
      const response = await fetch(api_url)
      const data = await response.json()

      console.log("🐣 data is:", data)
      setResults(data || [])
    }

    useEffect(() => {

      const timer = setTimeout(() => {
        if (input) {
            fetchGoogleBooksApi();
        } 
      }, 500);

      console.log("🟢 results is:", results)
      return () => clearTimeout(timer)
      
    }, [input]);

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log("🐯 set input is:", e.target.value) 
    };

    // console.log("🦄 clickedBook is:", clickedBook)

    const addBook = async(book, status) => {
        console.log("🍎", book)

        try {
            const response = await fetch("http://127.0.0.1:8000/api/books/add/", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    google_book_id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors.join(', '),
                    release_year: book.volumeInfo.publishedDate.slice(0, 4),
                    status: status,
                    comments: null,
                    current_page: null,
                    start_date: null,
                    end_date: null,
                    user: 1,
                    image_link: book.volumeInfo.imageLinks?.thumbnail || "missingbook.jpg"
                })
            });

            const data = await response.json()
            console.log("✅ data is:", data)

            setBooks((prev) => [...prev, data])

        } catch (err) {
            console.log(err);
        }

    };

  return (
    // <div className="relative w-full h-screen flex flex-col items-start gap-4">
    <div className="relative w-full flex flex-col items-start gap-4">

      <BrowserRouter>
        <Header results={results} input={input} handleInput={handleInput} setBooks={setBooks} setClickedBook={setClickedBook} addBook={addBook} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-col w-full h-screen items-start justify-between">
          <Routes>
            <Route path="/" element={<Home books={books} setBooks={setBooks} setClickedBook={setClickedBook} isOpen={isOpen} />} />
            <Route path="/book/:id" element={<Book books={books} setBooks={setBooks} clickedBook={clickedBook} setClickedBook={setClickedBook} addBook={addBook} />} /> 
            {/* <Route path="/login" />
            <Route path="/register" />
            <Route path="/profile/:id" /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
