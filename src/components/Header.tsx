import { useEffect, useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";

const Header = () => {
    const analytics = getAnalytics(app);

    const navLinks = [
        { name: 'Home', path: 'hero' },
        { name: 'About', path: 'about' },
        { name: 'Skills', path: 'skills' },
        { name: 'Experience', path: 'experience' },
        { name: 'Portfolio', path: 'portfolio' },
        { name: 'Contact', path: 'contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);

        logEvent(analytics, 'theme_change', {
            theme_mode: theme
        });
    }, [theme, analytics]);

    return (
        <div className="relative" id="navbar">
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-16 lg:px-24 xl:px-32
                    flex items-center justify-between dark:bg-darkModeGray
                    ${isScrolled
                        ? "bg-white dark:bg-darkModeGray shadow-md py-3 md:py-4 text-gray-800 dark:text-gray-100"
                        : "bg-transparent py-4 md:py-6 text-black dark:text-gray-100"
                    }`} aria-label="Main Navigation"
            >
                <a
                    href="/" aria-label="Go to homepage"
                    className="flex items-center gap-2"
                    onClick={() => logEvent(analytics, 'logo_click')}
                >
                    <div className="w-10 h-10 rounded-full bg-[#0388c9] bg-gradient-to-br from-[#92c7e2] to-darkBlue flex items-center justify-center shadow-mdtransition"
                        aria-hidden="true">
                        <span className="text-white font-bold text-lg font-poppins">S</span>
                    </div>
                    <h1 className="font-[600] text-xl text-[#0388c9] dark:text-blue-400 font-poppins tracking-wide">
                        Sushmitha
                    </h1>
                </a>

                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                logEvent(analytics, 'navigation_click', {
                                    section: link.name
                                });
                                const section = document.getElementById(link.path);
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="group flex flex-col gap-0.5 text-md text-gray-700 dark:text-gray-200 hover:text-darkBlue dark:hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer"
                            aria-label={`Navigate to ${link.name} section`} >
                            {link.name}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <button
                        onClick={() => {
                            toggleTheme();
                        }}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                        {theme === "light"
                            ? <BsMoon className="text-gray-800" />
                            : <BsSun className="text-yellow-400" />}
                    </button>
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            logEvent(analytics, isMenuOpen ? 'menu_close' : 'menu_open', { device: 'mobile' });
                        }}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <IoIosMenu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div
                    className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => {
                            setIsMenuOpen(false);
                            logEvent(analytics, 'menu_close', {
                                device: 'mobile'
                            });
                        }}
                        aria-label="Close mobile menu"
                    >
                        <IoCloseOutline className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {navLinks.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                logEvent(analytics, 'navigation_click', {
                                    section: link.name
                                });
                                const section = document.getElementById(link.path);
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                                setIsMenuOpen(false);
                            }}
                            className="group flex flex-col gap-0.5 text-md text-gray-700 dark:text-gray-200 hover:text-darkBlue dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
                            aria-label={`Navigate to ${link.name} section`}>
                            {link.name}
                        </button>
                    ))}

                    <button
                        onClick={() => {
                            toggleTheme();
                        }}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                        {theme === "light"
                            ? <BsMoon className="text-gray-800" />
                            : <BsSun className="text-yellow-400" />}
                    </button>
                </div>
            </nav>

            <div className="h-10 md:h-24" aria-hidden="true" />
        </div>
    );
};

export default Header;
