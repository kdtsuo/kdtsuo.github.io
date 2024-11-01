import '../output.css';

import Link from './subcomponents/Link';
import rubriclogo from '../imgs/icons/hellorubriclogo.png';
import discordlogo from '../imgs/icons/discordcolorlogo.png';
import addsonglogo from '../imgs/icons/addsonglogo.png';
import googleformsicon from '../imgs/icons/googleformsicon.png';


const QuickLinks = () => {
    const quickLinks = [];

    const addQuickLink = (image, text, link, isOpen) => quickLinks.push({ image, text, link, isOpen });

    addQuickLink(
        rubriclogo,
        'Memberships & Ticket Sales',
        'https://campus.hellorubric.com/?s=7805',
        true)
    addQuickLink(
        discordlogo,
        'KDT Discord',
        'https://discord.com/invite/tbKkvjV2W8',
        true)
    addQuickLink(addsonglogo,
        'KPop Dance Song Requests',
        'https://forms.gle/yVZcBeKBWPCm235aA',
        true)
    addQuickLink(
        googleformsicon,
        'Cameraman Application',
        'https://forms.gle/VAXETY3AUEiwELo56',
        true)

    return (
        <div>
            <div className='py-20 lg:py-28'>
            </div>
            <h1 className='p-5 text-xl md:text-4xl text-center font-semibold'>
                all things kpop for ubco!
                <br />dance projects and meetups for
                <br /> all kpop fans &#9829;
            </h1>

            <div className='flex flex-wrap justify-center items-center mp3 pb-12'>
                {quickLinks.map((ql, index) => {
                    return (
                        <Link
                            key={index}
                            image={ql.image}
                            text={ql.text}
                            link={ql.link}
                            isOpen={ql.isOpen}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default QuickLinks;
