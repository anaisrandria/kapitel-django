import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
    return (
        <div className="center md:h-full md:w-full md:flex md:justify-between">
            <NavLink to="http://127.0.0.1:8000/blog/"><p>Fil d'actualité</p></NavLink>
            <NavLink to="#"><p>Ma bibliothèque</p></NavLink>
            <NavLink to="#"><p>Profil</p></NavLink>
        </div>
    )
}

const Nav = ({ isOpen, setIsOpen }) => {

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <nav className="w-1/3 flex justify-end">
                <div id="menu" className="hidden md:flex justify-between gap-4 w-full text-sm">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="absolute top-4 right-4">
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
                <div className="items-center w-screen md:hidden">
                    <NavLinks />
                </div>
            )
            }
        </>
    )

    // return (
    //     <>
    //         <nav className="w-1/3 flex justify-end">
    //             <div id="menu" className="hidden md:flex justify-between gap-4 w-full text-sm">
    //                 <NavLinks />
    //             </div>
    //             {/* Affiche le burger menu si isOpen est false */}
    //             <div className="absolute top-4 right-4 md:hidden">
    //                 {!isOpen && (
    //                     <button onClick={toggleNavbar}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //                         </svg>
    //                     </button>
    //                 )}
    //             </div>
    //             {/* Affiche la croix de fermeture si isOpen est true */}
    //             <div className="absolute top-20 flex flex-col items-center bg-beige w-screen md:hidden">
    //             {/* <div className="absolute top-20 w-screen flex flex-col items-center justify-center bg-beige z-20 md:hidden"> */}
    //                 {isOpen && (
    //                     <>
    //                     <button onClick={toggleNavbar} className="absolute top-4 right-4">
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    //                         </svg>
    //                     </button>
    //                     <NavLinks />
    //                     </>
    //                 )}
    //             </div>
    //         </nav>
    //     </>
    // )
}

export default Nav;