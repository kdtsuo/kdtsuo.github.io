
const Contact = ({ link, image, text }) => {
    return (
        <div className="relative mp5 point t200e zoomin group contact-item">
            <a href={link} target="_blank" rel="noreferrer">
                <img className="max-w-24 lg:max-w-36 h-auto" src={image} alt='icon' />
                <span className="glass-slate p-3 text-lg rounded-full 
                                text-center w-full absolute -top-10 left-1/2 font-medium
                                transform -translate-x-1/2 translate-y-44 opacity-0 scale-0 
                                text-darkslategrey
                                group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 t500e">
                    {text}
                </span>
            </a>
        </div>
    );
};

export default Contact;