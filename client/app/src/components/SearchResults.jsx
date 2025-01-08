function SearchResults({ book }) {

    return (
        <>
            <div className="flex py-2 border-x-0 border-t-0 border-y border-slate-300 gap-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail || "missingbook.jpg"} alt="thumbnail" className="w-12 max-h-13" />
                <div id="book-details">
                    <p className="text-sm">{book.volumeInfo.title}</p>
                    <p className="text-xs">{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')} ({book.volumeInfo.publishedDate.slice(0, 4)})</p>
                    <button className="pt-2 hover:text-amber-700">Ajouter</button>
                </div>
            </div>
        </>
    )
}

export default SearchResults