import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
    return (
        <div className="center md:h-full md:w-full md:flex md:justify-between">
        {/* <div> */}
            <NavLink to="http://127.0.0.1:8000/blog/"><p className="py-6 hover:text-amber-700">Fil d'actualité</p></NavLink>
            <NavLink to="#"><p className="py-6 hover:text-amber-700">Ma bibliothèque</p></NavLink>
            <NavLink to="#"><p className="py-6 hover:text-amber-700">Profil</p></NavLink>
        </div>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="w-1/3 flex justify-end">
                <div id="menu" className="hidden md:flex justify-between w-full text-sm">
                    <NavLinks />
                </div>
                {/* Affiche le burger menu si isOpen est false */}
                <div className="absolute top-6 md:hidden">
                    {!isOpen && (
                        <button onClick={toggleNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    )}
                </div>
                {/* Affiche la croix de fermeture si isOpen est true */}
                    {isOpen && (
                        <>
                            <button onClick={toggleNavbar} className="absolute top-6 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="absolute pl-16 top-20 flex flex-col items-center justify-center text-center bg-beige w-screen h-[50vh] md:hidden">
                                <div className="flex flex-col gap-10">
                                    <NavLinks />
                                </div>
                            </div>
                        </>
                    )}
            </nav>
        </>
    )
}

export default Nav;