import { useState, useEffect } from "react";
import StatusReading from "./StatusReading";
import StatusQueued from "./StatusQueued";
import StatusCompleted from "./StatusCompleted";
import StatusPaused from "./StatusPaused";
import StatusArchived from "./StatusArchived";
import BookCard from "./BookCard";

function Home({ books, setBooks }) {
    
    const fetchBooks = async() => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/books/"); 
            const data = await response.json();
            
            console.log("🐝 data books is:", data);
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
            <StatusReading fetchBooks={fetchBooks} books={books} />
            <StatusQueued fetchBooks={fetchBooks} books={books} />
            <StatusCompleted fetchBooks={fetchBooks} books={books} />
            <StatusPaused fetchBooks={fetchBooks} books={books} />
            <StatusArchived fetchBooks={fetchBooks} books={books} />

        </div>
    )
}

export default Home