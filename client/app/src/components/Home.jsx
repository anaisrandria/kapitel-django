import { useState, useEffect } from "react";
import StatusReading from "./StatusReading";
import StatusQueued from "./StatusQueued";
import StatusCompleted from "./StatusCompleted";
import StatusPaused from "./StatusPaused";
import StatusArchived from "./StatusArchived";
import BookCard from "./BookCard";

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
            <div className="flex gap-6 w-[80vw] overflow-x-auto">
                {books.map((book) => (
                    <BookCard 
                        book={book}
                        setBooks={setBooks}
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        release_year={book.release_year}
                        status={book.status}
                        comments={book.comments}
                     />
                ))}
            </div>

        </div>
    )
}

export default Home