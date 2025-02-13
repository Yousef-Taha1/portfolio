import { useEffect, useState, useRef } from "react";


export const Navbar = ({menuOpen, setMenuOpen}) => {

    const navRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    
        // Closing the hamburger if clicked outside
        const handleClickOutside = (event) => {
            // Check if the clicked element is part of the menu options
            const isMenuOption = event.target.closest(".menu-option"); // Add a class to your menu options
            if (navRef.current && !navRef.current.contains(event.target) && !isMenuOption) {
                setMenuOpen(false);
            }
        };
    
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen, setMenuOpen]);

    return (
    <nav 
    ref={navRef}
    className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
    >
        <div className="max-w-5xl mx-auto px-4">
            <div className ="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Yousef Taha 
                </a>

                {/* Mobile Menu (Hamburger)*/}
                <div    
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#home" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                     Home 
                    </a>

                    <a
                        href="#about" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                     About 
                    </a>

                    <a
                        href="#projects" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                     Projects 
                    </a>

                    <div className="flex justify-between items-center">
                        <a 
                        href="/portfolio/CV_Yousef_Taha.pdf" 
                        className="text-gray-300 hove:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        > 
                        Resume
                        </a>
                    </div>

                    <a
                        href="#contact" 
                        className="text-gray-300 hove:text-white transition-colors"
                    >
                     Contact 
                    </a>
                </div>

                
            </div>

        </div>
    </nav>
    );
};