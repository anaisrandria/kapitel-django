import { useEffect } from "react";

function Book({ books, setBooks, id }) {

    const getBookDetails = async (pk) => {
        try {
            const response = await fetch (`http://127.0.0.1:8000/api/books/${pk}`);
            const bookData = await response.json()

            setBooks(bookData)
            console.log(books)

        } catch (err) {
            console.log(err)
        };
    }

    useEffect(() => {
        getBookDetails("bghBEAAAQBAJ")
    }, [])

    return (
        <div className="flex gap-6">
            <img id="big-cover" src="/missingbook.jpg" alt="cover" className="w-1/3"/>
            <div id="book-description" className="flex flex-col gap-3">
                <h1 id="title" className="text-3xl font-lora">Title</h1>
                <p id="author" className="text-xl">Auteur</p>
                <p id="summary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
    )
}

export default Book