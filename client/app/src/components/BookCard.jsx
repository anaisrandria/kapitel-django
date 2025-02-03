import { Link } from "react-router-dom";

function BookCard({ book, setBooks, setClickedBook, id, google_book_id, title, authors, release_year, status, comments }) {

    const deleteBook = async (pk) => {
        try {
            const response = await fetch (`http://127.0.0.1:8000/api/books/${pk}`, {
                method: "DELETE",
            });

            setBooks((prev) => prev.filter((book) => book.id !== pk))

        } catch (err) {
            console.log(err)
        };
    };

    return (
        <>
        <div id="book-card" className="flex-shrink-0 flex flex-col mb-8 text-sm w-44" key={id}>
            <Link to={`./book/${google_book_id}`}>
                <img src={book.image_link || "missingbook.jpg"} alt="book-cover" className="w-full max-h-64 drop-shadow-md rounded-sm mb-2"/>
            </Link>
            <p className="font-bold">{title}</p>
            <p>{authors}</p>
            <p>{release_year}</p>
            <p>Status: {status}</p>
            <p>Comments: {comments}</p>
            <div id="buttons" className="flex flex-col">
                <button className="px-2 py-2 rounded-md my-1 border border-amber-700 bg-transparent text-amber-700 hover:bg-amber-700 hover:text-white">Modifier</button>
                <button onClick={() => deleteBook(book.id)} className="px-2 py-2 my-1 rounded-md border bg-amber-700 text-white">Supprimer</button>
            </div>
        </div>
        </>
    )
}

export default BookCard