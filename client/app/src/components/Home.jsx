import { useState, useEffect } from "react";
import StatusReading from "./StatusReading";
import StatusQueued from "./StatusQueued";
import StatusCompleted from "./StatusCompleted";
import StatusPaused from "./StatusPaused";
import StatusArchived from "./StatusArchived";

function Home({ books, setBooks, setClickedBook }) {
    
    const fetchBooks = async() => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/books/"); 
            const data = await response.json();
            
            console.log("🐝 books db is:", data);
            setBooks(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    
    return (
        <div>
            <h1 className="text-4xl font-lora mb-4">
                Hello Anaïs
            </h1>
            <StatusReading books={books} setBooks={setBooks} />
            <StatusQueued books={books} setBooks={setBooks} setClickedBook={setClickedBook} />
            <StatusCompleted books={books} setBooks={setBooks} />
            <StatusPaused books={books} setBooks={setBooks} />
            <StatusArchived books={books} setBooks={setBooks} />

        </div>
    )
}

export default Home