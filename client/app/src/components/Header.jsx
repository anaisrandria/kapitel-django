import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchResults from './SearchResults';
import Nav from "./Nav";

function Header({ results, input, handleInput, setBooks, setClickedBook, addBook, isOpen, setIsOpen }) {

    return (
        // <header className="sticky z-10 top-0 w-full flex justify-stretch items-center pt-3 pb-6 bg-beige">
        <header className="sticky z-10 top-0 mx-auto flex w-full max-w-7xl items-center justify-stretch bg-beige pt-3 pb-6">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-stretch bg-beige pt-3 pb-6">
                <div id="logo-search-wrapper" className="flex gap-4 w-full">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </Link>
                    <div id="search-container" className="relative w-full md:w-2/3 border-x-0 border-t-0 border-y border-slate-300">
                        <input type="text" placeholder="Rechercher un livre..." name="search-bar" onChange={handleInput} className="bg-inherit w-full py-1 text-xs text-slate-700 focus:outline-none"></input>
                        {/* Search results container */}
                        {input && 
                            <div className="absolute mt-2 w-full px-2 bg-white shadow-lg rounded-bl-md rounded-br-md max-h-[60vh] overflow-y-auto text-xs">
                                {results.items && results.items.map((book, id) => {
                                    return <SearchResults book={book} key={id} setBooks={setBooks} setClickedBook={setClickedBook} addBook={addBook} />
                                })}  
                            </div>
                        }
                    </div>
                </div>
            </div>
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default Header

