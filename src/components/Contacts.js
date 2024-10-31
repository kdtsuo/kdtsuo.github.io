
import '../output.css';
import Contact from './subcomponents/Contact';
import githubLogo from '../imgs/icons/githublogo.png';
import instagramLogo from '../imgs/icons/instagramlogo.png';
import discordLogo from '../imgs/icons/discordlogo.png';
import youtubeLogo from '../imgs/icons/youtubelogo.png';
import mailLogo from '../imgs/icons/maillogo.png';
import ContactForm from './subcomponents/ContactForm';

const Contacts = () => {
    const contacts = [];
    const addContact = (link, image, text) => contacts.push({ link, image, text });

    addContact("https://www.instagram.com/kdt.suo/?theme=dark", instagramLogo, "Instagram");
    addContact("https://discord.com/invite/tbKkvjV2W8", discordLogo, "Discord");
    addContact("https://www.youtube.com/@KpopDanceTeamSUO", youtubeLogo, "Youtube");
    addContact("mailto:kpopdanceteam.suo@gmail.com", mailLogo, "Email");
    addContact("https://www.github.com/kdtsuo/kdtsuo.github.io", githubLogo, "Github");


    return (
        <div className='my-5 p-5'>
            <div id="contactsection" className="my-10">
                &nbsp;
            </div>
            <div id="contact" className="m-5">
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

            <h1 className='title text-darkslateblue text-center my-10'>Direct Contact via Email</h1>
            <ContactForm />
        </div>
    );
}

export default Contacts;