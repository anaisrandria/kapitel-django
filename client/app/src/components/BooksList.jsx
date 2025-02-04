import BookCard from "./BookCard"

const BooksList = ({ books, setBooks, setClickedBook, status, title, subtitle, updateStatus }) => {

    if (books && books.error) {
        return (
            <div>{books.error.message}</div>
        )
    }

    let nbBooks = 0

    // const totalBooks = () => {
        for (let i = 0; i < books.length; i++) {
            if (status === status) {
                nbBooks += 1
            }
            console.log("🐙", nbBooks)
        }
    // }
    
    return (
        <>
        <div className="pt-4 pb-2 w-full border-x-0 border-t-0 border-y border-gray-200 gap-2">
            <div className="flex items-baseline justify-between">
                <h2 className="text-2xl">{title}</h2>
                <p>
                    {nbBooks} livres
                </p>
            </div>
            <p className="text-xs text-gray-400">{subtitle}</p>
            <div className="mt-8 flex gap-6 w-[80vw] overflow-x-auto">
                {books && books
                    .filter((book) => 
                        book.status == status)
                    .reverse()
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
                            updateStatus={updateStatus}
                        />
                )}
            </div>
        </div>
        </>
    )

}

export default BooksList

