import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ setInput }) {

    const fetchGoogleBooksApi = async() => {
        const api_url = `https://books.googleapis.com/books/v1/volumes?q=${setInput}&maxResults=40&printType=books&key=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(api_url)
        const data = await response.json()

        console.log("🐣 data is:", data)
    }

    const handleInput = (e) => {
        setInput(e.target.value);
        
        let timer = 0;
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (setInput !== "") {
                fetchGoogleBooksApi();
            }
        }, 3000);
        
        console.log("🐯 set input is:", e.target.value)
    };

    return (
        <div className="sticky z-10 top-0 w-full flex justify-stretch items-center pt-3 pb-6 bg-beige">
            <div id="logo-search" className="flex gap-4 w-full">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </Link>
                <div id="search-container" className="relative w-full border-x-0 border-t-0 border-y border-slate-300">
                    <input type="text" placeholder="Rechercher un livre..." name="search-bar" onChange={handleInput} className="bg-inherit py-1 text-xs text-slate-700 focus:outline-none"></input>
                    {/* Search results container */}
                    <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto text-sm">
                        <ul>
                            <li>Test 1</li>
                            <li>Test 2</li>
                            <li>Test 3</li>
                        </ul>    
                    </div>
                </div>
            </div>
            <div id="menu" className="flex justify-end gap-4 w-full text-sm">
                <Link to="#"><p>Fil d'actualité</p></Link>
                <Link to="#"><p>Ma bibliothèque</p></Link>
                <Link to="#"><p>Profil</p></Link>
            </div>
        </div>
    )
}

export default Header