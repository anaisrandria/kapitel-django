import { Link } from "react-router-dom";
import { useState  } from "react";

function Header() {

    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log("🐯 set input is:", input)
    };

    return (
        <div className="sticky z-10 top-0 w-full flex justify-stretch items-center pt-3 pb-6 bg-beige">
            <div id="logo-searchbar" className="flex gap-4 w-full">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </Link>
                <input type="text" placeholder="Rechercher un livre..." name="search-bar" onInput={handleInput} className="bg-inherit py-1 w-full text-xs text-slate-700 border-x-0 border-t-0 border-y border-slate-300 focus:outline-none"></input>
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