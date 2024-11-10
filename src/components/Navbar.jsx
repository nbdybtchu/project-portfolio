import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const controls = useAnimation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -0; // Adjust if needed for fixed header
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

    // Scroll detection
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ y: 0, opacity: 1 });
        } else {
            controls.start({ y: -100, opacity: 0 });
        }
    }, [isVisible, controls]);

    return (
        <motion.div
            className="fixed left-0 right-0 top-4 z-50"
            animate={controls}
            initial={{ y: 0, opacity: 1 }}
        >
            <nav>
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-sm items-center justify-center rounded-lg bg-black/10 py-1 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-12">
                        <div className="m-auto">
                            <a href="#" onClick={handleLogoClick}>
                                <img src={logo} width={70} alt="logo" />
                            </a>
                        </div>
                        <div className="py-4">
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="text-sm hover:text-green-500 font-black uppercase"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
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
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md items-center py-4'
                        >
                            {NAVIGATION_LINKS.map((item, index) => (
                                <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                                    <a
                                        className="block w-full text-xl font-semibold hover:text-green-600"
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
