import { Link } from "react-router-dom";

function SearchResults({ book, setBooks, setClickedBook, addBook }) {

    return (
        <>
            <div onClick={() => { setClickedBook(book) }} className="flex py-2 border-x-0 border-t-0 border-y border-gray-200 gap-2">
                <Link to={`./book/${book.id}`}><img src={book.volumeInfo.imageLinks?.thumbnail || "/missingbook.jpg"} alt="thumbnail" className="max-w-12 max-h-13" /></Link>
                <div id="book-details">
                    <Link to={`./book/${book.id}`}>
                    <p className="text-s">{book.volumeInfo.title}</p>
                    <p className="text-xs">{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')} ({book.volumeInfo.publishedDate && book.volumeInfo.publishedDate.slice(0, 4)})</p>
                    </Link>
                    <button onClick={() => addBook(book)} className="pt-2 hover:text-amber-700">Ajouter à ma liste de lecture</button>
                </div>
            </div>
        </>
    )
}

export default SearchResults