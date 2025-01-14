import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Book({ books, setBooks, setClickedBook, clickedBook, addBook }) {
    
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

    // const options = [
    //     { key: 1, text: 'En cours', value: 1 },
    //     { key: 2, text: 'À lire', value: 2 },
    //     { key: 3, text: 'Terminé', value: 3 },
    //     { key: 4, text: 'En pause', value: 4 },
    //     { key: 5, text: 'Archivé', value: 5 },
    // ]


    return (
        <div className="flex gap-6">
            {clickedBook.volumeInfo && 
                <>
                <img id="big-cover" src={clickedBook.volumeInfo.imageLinks?.large || "/missingbook.jpg"} alt="cover" className="w-1/3"/>
                <div id="book-description" className="flex flex-col gap-2 items-start">
                    <h1 id="title" className="text-3xl font-lora">{clickedBook.volumeInfo.title} ({clickedBook.volumeInfo.publishedDate.slice(0,4)})</h1>
                    <p id="author" className="text-xl">{clickedBook.volumeInfo.authors.join(', ')}</p>
                    <button type="button" onClick={() => addBook(clickedBook)} className="px-3 py-2 my-2 rounded-md border bg-amber-700 text-white text-s">Ajouter à ma bibliothèque</button>
                    {/* <div className="flex flex-col px-3 py-2 my-2 rounded-md border bg-white *:text-s"> */}
                    <ul role="button" tabIndex="0" aria-expende="true">
                        <li><button>En cours</button></li>
                        <li><button>À lire</button></li>
                        <li><button>Terminé</button></li>
                        <li><button>En pause</button></li>
                        <li><button>Archivé</button></li>
                    </ul>
                    {/* </div> */}
                    <p id="summary" className="">{clickedBook.volumeInfo.description}</p>
                </div>
                </> 
            }
        </div>
        
    )
}

export default Book