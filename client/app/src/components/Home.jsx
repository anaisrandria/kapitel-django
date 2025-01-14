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
            {books.length == 0 && 
                <>
                <div className="flex flex-col items-center p-6">
                    <div className="text-3xl font-lora text-center py-4 w-3/5">
                    Ta bibliothèque est vide ! Commence par explorer la librairie et ajoute des livres à ta liste de lecture.
                    </div>
                    <button type="button" className="px-3 py-3 my-1 rounded-md border bg-amber-700 text-white text-s">Explorer les livres</button>
                </div>
                </>
            }
            <StatusReading books={books} setBooks={setBooks} />
            <StatusQueued books={books} setBooks={setBooks} setClickedBook={setClickedBook} />
            <StatusCompleted books={books} setBooks={setBooks} />
            <StatusPaused books={books} setBooks={setBooks} />
            <StatusArchived books={books} setBooks={setBooks} />
        </div>
    )
}

export default Home