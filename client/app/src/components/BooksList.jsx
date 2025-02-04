import BookCard from "./BookCard"

function BooksList ({ books, setBooks, setClickedBook, status, title, subtitle, addBook, updateStatus }) {

    if (books && books.error) {
        return (
            <div>{books.error.message}</div>
        )
    }
    
    return (
        <>
        <div className="pt-4 pb-2 w-full border-x-0 border-t-0 border-y border-gray-200 gap-2">
            <div className="flex items-baseline justify-between">
                <h2 className="text-2xl">{title}</h2>
                <p>0 livres</p>
            </div>
            <p className="text-xs text-gray-400">{subtitle}</p>
            <div className="mt-8 flex gap-6 w-[80vw] overflow-x-auto">
                {books && books
                    .filter((book) => 
                        book.status == status)
                    .map((book) => 
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
                            image_link={book.image_link}
                            addBook={addBook}
                            updateStatus={updateStatus}
                        />
                )}
            </div>
        </div>
        </>
    )

}

export default BooksList

