function Home() {

    const fetchGoogleBooksApi = async() => {
        const api_url = `https://books.googleapis.com/books/v1/volumes?q=${searchInput.value}&maxResults=40&printType=books&key=${apiKey}`
        const response = await fetch(api_url)
        const data = await response.json()

        console.log("🍎 data is:", data)
    }
    fetchGoogleBooksApi()

    
    return (
        <h1 className="text-4xl font-lora">
            Hello Anaïs
        </h1>
    )
}

export default Home