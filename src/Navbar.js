import React, { useState, useEffect } from 'react';
import './StyleSheets/Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLink, setActiveLink] = useState('/'); // default active link

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down
                setShow(false);
            } else { // if scroll up
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${show ? 'active' : 'hidden'}`}>
            <div className="image">
                <a href="/Home" id="image"><h1>Hemkesh.me</h1></a>
            </div>

            <div className="links">
                <a
                    href="/"
                    className={activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                >
                    Home
                </a>
                <a
                    href="/About"
                    className={activeLink === '/About' ? 'active' : ''}
                    onClick={() => handleLinkClick('/About')}
                >
                    About
                </a>
                <a
                    href="/Skills"
                    className={activeLink === '/Skills' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Skills')}
                >
                    Skills
                </a>
                <a
                    href="/Portfolio"
                    className={activeLink === '/Portfolio' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Portfolio')}
                >
                    Portfolio
                </a>
                <a
                    href="/Services"
                    className={activeLink === '/Services' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Services')}
                >
                    Services
                </a>
                <a
                    href="/Achievements"
                    className={activeLink === '/Achievements' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Achievements')}
                >
                    Achievements
                </a>
                <a
                    href="/Contact"
                    className={activeLink === '/Contact' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Contact')}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
