/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import logo from '../imgs/kdtlogotransparent.png';
import cross from '../imgs/icons/cross.png';
import arrowright from '../imgs/icons/rightchevronwhite.png';
import discordlogo from '../imgs/icons/discordlogo.png';
import githublogo from '../imgs/icons/githublogo.png';
import maillogo from '../imgs/icons/maillogo.png';
import instagramlogo from '../imgs/icons/instagramlogo.png';

function NavbarPanel({ isPanelOpen, togglePanel }) {
    return (
        <div>
            <nav
                id="navbar-panel"
                className={`z-20 w-4/5 h-full lg:w-2/5 glass-lightblue fixed right-0 rounded-l-3xl t200e 
            ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} // Handle visibility based on isPanelOpen
            >
                <div className="flex justify-between items-center mp5">
                    <button id="cross" className="point group t200e flex items-center" aria-label="Close" onClick={togglePanel}>
                        <img className="size-8 lg:size-12 opacity-70 t200e 
                     group-hover:rotate-180 group-hover:opacity-100 " src={cross} alt="cross" />
                        <img className="arrow-icon-pop-right opacity-0 size-5 g:size-12 t200e rotate-180 " alt="arrow icon" src={arrowright} />
                    </button>
                    <a href="" className="h-auto point group flex items-center">
                        <img className="arrow-icon-pop-left opacity-0 size-5 lg:size-20 t200e " alt="arrow icon" src={arrowright} />
                        <img className="w-24 lg:w-40" src={logo} alt="kdt logo" />
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mp3 font-normal text-white">
                    <a href="#about" className="text-3xl lg:text-5xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-6 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="arrow-icon-pop-left opacity-0 size-5 t200e mx-3" alt="arrow icon" src={arrowright} />
                            About
                        </span>
                    </a>
                    <a href="#positions" className="text-3xl lg:text-5xl  point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-6 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="arrow-icon-pop-left opacity-0 size-5 t200e mx-3" alt="arrow icon" src={arrowright} />
                            Positions
                        </span>
                    </a>
                    <a href="#sponsors" className="text-3xl  lg:text-5xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-6 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="arrow-icon-pop-left opacity-0 size-5 t200e mx-3" alt="arrow icon" src={arrowright} />
                            Sponsors
                        </span>
                    </a>
                    <a href="#contactsection" className="text-3xl  lg:text-5xl point group mp3">
                        <span className="nav-option flex justify-center items-center -translate-x-6 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 t200e">
                            <img className="arrow-icon-pop-left opacity-0 size-5 t200e mx-3" alt="arrow icon" src={arrowright} />
                            Contact
                        </span>
                    </a>
                </div>
                <div className="quicklinks mp3">
                    <div className="flex justify-center flex-wrap items-center">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rin.m04/?theme=dark"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="w-16 lg:w-24  h-auto m-3" src={instagramlogo} alt="instagram icon " />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:kpopdanceteam.suo@gmail.com"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="w-16 lg:w-24  h-auto m-3" src={maillogo} alt="mail icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://discord.com/invite/tbKkvjV2W8"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="w-16 lg:w-24 h-auto m-3" src={discordlogo} alt="linkedin icon" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.github.com/rinmeng"
                            className="ql point nudgeup fadein80 t200e">
                            <img className="w-16 lg:w-24  h-auto m-3" src={githublogo} alt="github icon" />
                        </a>
                    </div>
                </div>

            </nav>
            <nav>
                <div id="blur-panel" className={`fixed -z-10 w-full h-full bg-black t500e ${isPanelOpen ? 'opacity-75 z-10 ' : 'opacity-0'}`}></div>
            </nav>

        </div>
    );
}

export default NavbarPanel;
