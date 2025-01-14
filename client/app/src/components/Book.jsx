import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Book({ books, setBooks, setClickedBook, clickedBook }) {
    
    let params = useParams()

    const getBookDetails = async () => {
        try {
            // const response = await fetch (`http://127.0.0.1:8000/api/books/${params.id}`);
            const response = await fetch (`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
            const bookData = await response.json()
            
            setClickedBook(bookData)
            console.log("bookData is:", bookData)
            
        } catch (err) {
            console.log(err)
        };
        
    }

    useEffect(() => {
        getBookDetails()
    }, []);

    return (
        <div className="flex gap-6">
            {clickedBook.volumeInfo && 
                <>
                <img id="big-cover" src={clickedBook.volumeInfo.imageLinks?.large || "/missingbook.jpg"} alt="cover" className="w-1/3"/>
                <div id="book-description" className="flex flex-col gap-3">
                    <h1 id="title" className="text-3xl font-lora">{clickedBook.volumeInfo.title} ({clickedBook.volumeInfo.publishedDate.slice(0,4)})</h1>
                    <p id="author" className="text-xl">{clickedBook.volumeInfo.authors}</p>
                    <p id="summary" >{clickedBook.volumeInfo.description}</p>
                </div>
                </> 
            }
        </div>
        
    )
}

export default Book