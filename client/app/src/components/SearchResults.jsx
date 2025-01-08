function SearchResults({ book }) {

    const addBook = async() => {
        console.log("🍎", book)

        try {
            const response = await fetch("http://127.0.0.1:8000/api/books-user/add/", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    google_book_id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    release_year: book.volumeInfo.publishedDate,
                    status: 5,
                    comments: null,
                    current_page: null,
                    start_date: null,
                    end_date: null,
                    user: 1
                })
            });

            const data = await response.json()
            console.log("✅ data is:", data)

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <div className="flex py-2 border-x-0 border-t-0 border-y border-slate-300 gap-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail || "missingbook.jpg"} alt="thumbnail" className="w-12 max-h-13" />
                <div id="book-details">
                    <p className="text-s">{book.volumeInfo.title}</p>
                    <p className="text-xs">{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')} ({book.volumeInfo.publishedDate.slice(0, 4)})</p>
                    <button onClick={addBook} className="pt-2 hover:text-amber-700">Ajouter</button>
                </div>
            </div>
        </>
    )
}

export default SearchResults