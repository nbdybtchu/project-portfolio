import { useState } from 'react';
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-6">
                        <div className="m-auto">
                            <a href="#">
                                <img src={logo} width={90} alt="logo" />
                            </a>
                        </div>
                        <div className="py-4">
                            <ul className="flex items-center gap-4 ">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-sm hover:text-green-700 font-semibold"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-center">
                        <a href="#">
                            <img src={logo} width={90} alt="logo" className="m-2" />
                        </a>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" />
                                ) : (
                                    <FaBars className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className="block w-full text-xl font-semibold" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
