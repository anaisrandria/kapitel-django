import { useState, useEffect } from "react";
import BooksList from "./BooksList";

const Home = ({ books, setBooks, setClickedBook, addBook }) => {
    
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
                    <div className="flex flex-col items-center py-6">
                        <div className="text-xl md:text-3xl font-lora text-center py-4 md:w-3/5">
                        Ta bibliothèque est vide ! Commence par explorer la librairie et ajoute des livres à ta liste de lecture.
                        </div>
                        <button type="button" className="px-3 py-3 my-2 rounded-md border bg-amber-700 text-white text-s">Explorer les livres</button>
                    </div>
                    </>
                }
                <BooksList books={books} setBooks={setBooks} setClickedBook={setClickedBook} status={1} title={"Mes lectures en cours"} subtitle={"Les livres que je suis en train de lire."} addBook={addBook} />
                <BooksList books={books} setBooks={setBooks} setClickedBook={setClickedBook} status={2} title={"Ma liste de lecture"} subtitle={"Les livres que j'ai envie de lire."} addBook={addBook} />
                <BooksList books={books} setBooks={setBooks} setClickedBook={setClickedBook} status={3} title={"Mes lectures terminées"} subtitle={"Les livres que j'ai fini de lire."} addBook={addBook} />
                <BooksList books={books} setBooks={setBooks} setClickedBook={setClickedBook} status={4} title={"Mes lectures en pause"} subtitle={"Les livres à reprendre plus tard."} addBook={addBook} />
                <BooksList books={books} setBooks={setBooks} setClickedBook={setClickedBook} status={5} title={"Mes lectures archivées"} subtitle={"Les livres que j'ai abandonnés."} addBook={addBook} />
            </div>
    )
}

export default Home