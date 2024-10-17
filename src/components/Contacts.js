
import '../output.css';
import Contact from './subcomponents/Contact';
import githubLogo from '../imgs/icons/githublogo.png';
import instagramLogo from '../imgs/icons/instagramlogo.png';
import discordLogo from '../imgs/icons/discordlogo.png';
import youtubeLogo from '../imgs/icons/youtubelogo.png';
import mailLogo from '../imgs/icons/maillogo.png';

const Contacts = () => {
    const contacts = [];
    const addContact = (link, image, text) => contacts.push({ link, image, text });

    addContact("https://www.instagram.com/kdt.suo/?theme=dark", instagramLogo, "instagram!");
    addContact("https://discord.com/invite/tbKkvjV2W8", discordLogo, "discord!");
    addContact("https://www.youtube.com/@KpopDanceTeamSUO", youtubeLogo, "youtube!");
    addContact("mailto:kpopdanceteam.suo@gmail.com", mailLogo, "email!");
    addContact("https://www.github.com/kdtsuo/kdtsuo.github.io", githubLogo, "github!");


    return (
        <div className='my-10'>
            <div id="contactsection" className="my-10">
                &nbsp;
            </div>
            <div id="contact" className="m-5 bg-lightblue drop-shadow-3xl rounded-md">
                <h1 className=" title text-center text-darkslateblue py-10">Contacts</h1>
                <div className="flex justify-center items-center flex-wrap">
                    {contacts.map((contact, index) => (
                        <Contact
                            key={index}
                            link={contact.link}
                            image={contact.image}
                            text={contact.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contacts;