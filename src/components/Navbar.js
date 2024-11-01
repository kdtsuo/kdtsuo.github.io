/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import '../output.css';
import logo from '../imgs/kdtlogotransparent.png';
import hamburger from '../imgs/icons/navbaricon.png';

function Navbar({ isPanelOpen, togglePanel }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 700);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${isPanelOpen ? 'opacity-0' : 'opacity-100'} ${isVisible ? 'transparent-gradient' : 'opacity-0'} t200e fixed w-full z-10 flex justify-between items-center px-10 py-5`}>
            <a href="#" className={`w-24 lg:w-44 h-auto point ${isVisible ? 'opacity-100' : 'opacity-0'} t200e`}>
                <img
                    id="navbar-logo"
                    className='w-28 h-auto'
                    src={logo}
                    alt="kdt logo"
                />
            </a>
            <img
                id="hamburger"
                className='w-12 lg:w-18 h-auto point zoomin t200e opacity-80 hover:opacity-100'
                src={hamburger}
                alt="navbar icon"
                onClick={togglePanel}
            />
        </nav>
    );
}

export default Navbar;
