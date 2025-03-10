import newtabLogo from '../../imgs/icons/newtablogo.png';
import newtabLogoWhite from '../../imgs/icons/newtablogowhite.png';



const Contact = ({ link, image, text }) => {
    return (
        <div className="relative p-5 point t200e zoomin group contact-item">
            <a href={link} target="_blank" rel="noreferrer">
                <img className="max-w-24 lg:max-w-36 h-auto" src={image} alt='icon' />
                <span className="flex justify-center glass-slate p-3 text-sm 
                                lg:text-xl rounded-full  w-full absolute 
                                -top-10 left-1/2 font-medium
                                transform -translate-x-1/2 translate-y-44 
                                opacity-0 scale-0 text-white 
                                group-hover:translate-y-0 group-hover:opacity-100 
                                group-hover:scale-100 t500e">
                    <p className='mx-1'>{text}</p>
                    <img className='newtab-xs lg:newtab-sm' src={newtabLogoWhite} alt='new tab icon' />
                </span>


            </a>
        </div>
    );
};

export default Contact;