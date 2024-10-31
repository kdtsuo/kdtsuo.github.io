/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import logo from '../imgs/kdtlogotransparent.png';
import hamburger from '../imgs/icons/navbaricon.png';

function Navbar({ isPanelOpen, togglePanel }) {
    return (
        <nav className={`${isPanelOpen ? 'opacity-0' : 'opacity-100'} t200e fixed w-full z-10 bg-gradient-to-t from-transparent to-lightblue flex justify-between items-center px-10 py-8`}>
            <a href="" className="w-24 lg:w-44 h-auto point">
                <img
                    id="navbar-logo"
                    className='w-44 h-auto'
                    src={logo}
                    alt="kdt logo"
                />
            </a>
            <img
                id="hamburger"
                className='w-16 lg:w-20 h-auto point zoomin t200e  hover:opacity-100'
                src={hamburger}
                alt="navbar icon"
                onClick={togglePanel}
            />
        </nav>
    );
}

export default Navbar;
