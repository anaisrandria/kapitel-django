function BookCard({ book, setBooks, id, title, authors, release_year, status, comments }) {

    const deleteBook = async (pk) => {
        try {
            const response = await fetch (`http://127.0.0.1:8000/api/books/${pk}`, {
                method: "DELETE",
            });

            // await response.json();
            setBooks((prev) => prev.filter((book) => book.id !== pk))

        } catch (err) {
            console.log(err)
        };
    };

    return (
        <>
        <div id="book-card" className="flex-shrink-0 flex flex-col mb-8 text-sm w-44" key={book.id}>
            {/* {" "} */}
            <img src={book.image_link || "missingbook.jpg"} alt="book-cover" className="w-full max-h-64 drop-shadow-md rounded-sm mb-2"/>
            <p className="font-bold">{book.title}</p>
            <p>{book.authors}</p>
            <p>{book.release_year}</p>
            <p>Status: {book.status}</p>
            <p>Comments: {book.comments}</p>
            <button className="px-2 py-2 rounded-md my-2 border border-amber-700 bg-transparent text-amber-700 hover:bg-amber-700 hover:text-white">Mes notes</button>
            <button onClick={() => deleteBook(book.id)} className="px-2 py-2 border bg-amber-700 text-white rounded-md">Supprimer</button>
        </div>
        </>
    )
}

export default BookCard