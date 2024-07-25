import { useState } from 'react';
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setIsMobileMenuOpen(false);
    };

    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
      
      const listItem = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-sm items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-12">
                        <div className="m-auto">
                            <a href="#" onClick={handleLogoClick}>
                                <img src={logo} width={70} alt="logo" />
                            </a>
                        </div>
                        <div className="py-4">
                            <ul className="flex items-center gap-4 ">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-sm hover:text-green-500 font-semibold"
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
                    <div className="flex items-center justify-between px-6">
                        <a href="#" onClick={handleLogoClick}>
                            <img src={logo} width={60} alt="logo" className="m-2" />
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
                        <motion.ul 
                        initial="hidden"
                        animate="visible"
                        variants={list}
                        className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md items-center py-4'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <motion.li 
                                variants={listItem}
                                key={index}>
                                    <a className="block w-full text-xl font-semibold hover:text-green-600" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;