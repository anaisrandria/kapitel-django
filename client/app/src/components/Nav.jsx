import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
    return (
        <>
        <NavLink to="http://127.0.0.1:8000/blog/"><p>Fil d'actualité</p></NavLink>
        <NavLink to="#"><p>Ma bibliothèque</p></NavLink>
        <NavLink to="#"><p>Profil</p></NavLink>
        </>
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
                <div id="menu" className="hidden md:flex justify-end gap-4 w-full text-sm">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex basis-full flex-col items-center">
                    <NavLinks />
                </div>
            )
            }
        </>
    )
}

export default Nav;