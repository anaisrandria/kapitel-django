import { Link } from "react-router-dom";

function BookCard({ book, setBooks, clickedBook, setClickedBook, id, google_book_id, title, authors, updateStatus }) {

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
                    <div id="dropdown" className="inline-block mt-0.5 group">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                        </button>
                        <div id="dropdown-content" className="hidden absolute z-10 bg-white py-2 px-3 w-40 text-sm shadow-lg group-hover:block">
                            {book.status !== 1 &&
                            <p onClick={() => updateStatus(book.id, book.google_book_id, book.title, book.authors, book.release_year, book.comments, book.image_link, 1)} className="block cursor-pointer hover:bg-gray-50">En cours</p>
                             }
                            {book.status !== 2 &&
                            <p onClick={() => updateStatus(book.id, book.google_book_id, book.title, book.authors, book.release_year, book.comments, book.image_link, 2)} className="block cursor-pointer hover:bg-gray-50">À lire</p>
                             }
                            {book.status !== 3 &&
                            <p onClick={() => updateStatus(book.id, book.google_book_id, book.title, book.authors, book.release_year, book.comments, book.image_link, 3)} className="block cursor-pointer hover:bg-gray-50">Terminé</p>
                            }
                            {book.status !== 4 &&
                            <p onClick={() => updateStatus(book.id, book.google_book_id, book.title, book.authors, book.release_year, book.comments, book.image_link, 4)} className="block cursor-pointer hover:bg-gray-50">En pause</p>
                            }
                            {book.status !== 5 &&
                            <p onClick={() => updateStatus(book.id, book.google_book_id, book.title, book.authors, book.release_year, book.comments, book.image_link, 5)} className="block cursor-pointer hover:bg-gray-50">Archivé</p>
                            }
                            <p onClick={() => deleteBook(book.id)} className="block cursor-pointer hover:bg-gray-50 text-red-700">Supprimer</p>

                        </div>
                    </div>
            </div>
            <p className="truncate">{authors}</p>
        </div>
        </>
    )
}

export default BookCard