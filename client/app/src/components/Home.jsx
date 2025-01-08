import { useState, useEffect } from "react";
import StatusReading from "./StatusReading";
import StatusQueued from "./StatusQueued";
import StatusCompleted from "./StatusCompleted";
import StatusPaused from "./StatusPaused";
import StatusArchived from "./StatusArchived";

function Home({ books, setBooks }) {

    // const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

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
    
    return (
        <div>
            <h1 className="text-4xl font-lora mb-4">
                Hello Anaïs
            </h1>
            <StatusReading />
            <StatusQueued />
            <StatusCompleted />
            <StatusPaused />
            <StatusArchived />
            <div className="flex gap-6 w-[100vh] overflow-x-auto">
                {books.map((book) => (
                    <div className="mb-8 text-sm" key={book.id}>
                        {/* {" "} */}
                        <p>Id: {book.id}</p>
                        <p>Google Book Id: {book.google_book_id}</p>
                        <p>Title: {book.title}</p>
                        <p>Authors: {book.authors}</p>
                        <p>Release year: {book.release_year}</p>
                        <p>Status: {book.status}</p>
                        <p>Comments: {book.comments}</p>
                        <button className="px-2 py-1 border bg-amber-700 text-white rounded-md">Modifier</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home