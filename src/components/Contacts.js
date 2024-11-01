
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
        <div className=' bg-lightblue-300 p-5'>
            <div id="contactsection" className="">
                &nbsp;
            </div>
            <div id="contact" className="">
                <h1 className=" title text-center text-darkslateblue py-10 ">Contacts</h1>
                <div className="flex justify-center items-center flex-wrap my-10">
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
            <ContactForm />

            <div className='pb-10'>

            </div>
        </div>
    );
}

export default Contacts;