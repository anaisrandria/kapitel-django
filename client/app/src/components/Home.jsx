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

    const deleteBook = async (pk) => {
        try {
            const response = await fetch (`http://127.0.0.1:8000/api/books/${pk}`, {
                method: "DELETE",
            });

            // await response.json();
            setBooks((prev) => prev.filter((book) => book.id !== pk))

        } catch (err) {
            console.log(err)
        };
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
                    <div id="book-card" className="flex-shrink-0 flex flex-col mb-8 text-sm w-44" key={book.id}>
                        {/* {" "} */}
                        <img src={book.image_link || "missingbook.jpg"} alt="book-cover" className="w-full max-h-64 drop-shadow-md rounded-sm mb-2"/>
                        <p className="font-bold">{book.title}</p>
                        <p>{book.authors}</p>
                        <p>{book.release_year}</p>
                        <p>Status: {book.status}</p>
                        <p>Comments: {book.comments}</p>
                        <button className="px-2 py-1 border bg-amber-700 text-white rounded-md">Modifier</button>
                        <button onClick={() => deleteBook(book.id)} className="px-2 py-1 border bg-amber-700 text-white rounded-md">Supprimer</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home