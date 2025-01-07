import { useState } from "react"


function Home() {

    const [books, setBooks] = useState([])

    const fetchBooks = async() => {
        try {
            
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <h1 className="text-4xl font-lora">
            Hello Anaïs
        </h1>
    )
}

export default Home