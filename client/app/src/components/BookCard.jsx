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
        <div id="book-card" className="flex-shrink-0 flex flex-col mb-8 text-sm w-36" key={id}>
            <Link to={`./book/${google_book_id}`}>
                <img src={book.image_link || "missingbook.jpg"} alt={title} className="w-36 h-56 drop-shadow-md rounded-md mb-2"/>
            </Link>
            <div id="title" className="flex justify-between">
                <p className="font-bold truncate">{title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                    </svg>
            </div>
            <p className="truncate">{authors}</p>
            {/* <p>{release_year}</p> */}
            {/* <div id="buttons" className="flex flex-col">
                <button className="px-2 py-2 rounded-md my-1 border border-amber-700 bg-transparent text-amber-700 hover:bg-amber-700 hover:text-white">Modifier</button>
                <button onClick={() => deleteBook(book.id)} className="px-2 py-2 my-1 rounded-md border bg-amber-700 text-white">Supprimer</button>
            </div> */}
        </div>
        </>
    )
}

export default BookCard