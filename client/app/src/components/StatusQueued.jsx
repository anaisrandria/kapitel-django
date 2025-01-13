import BookCard from "./BookCard"

function StatusQueued({ books, setBooks, setClickedBook }) {
    console.log("🍏", books)

    if (books.error) {
        return (
            <div>{books.error.message}</div>
        )
    }
    return (
        <div className="pt-4 pb-4 w-full border-x-0 border-t-0 border-y border-gray-200 gap-2">
            <h2 className="text-2xl">Ma liste de lecture</h2>
            <p className="text-xs text-gray-400">Les livres que j'ai envie de lire.</p>
            <div className="mt-8 flex gap-6 w-[80vw] overflow-x-auto">
                {books && books.map((book) => (
                    <BookCard 
                        onClick={() => { setClickedBook(book) }}
                        book={book}
                        setBooks={setBooks}
                        key={book.id}
                        id={book.id}
                        google_book_id={book.google_book_id}
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

export default StatusQueued