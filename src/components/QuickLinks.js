import '../output.css';

import Link from './subcomponents/Link';
import rubriclogo from '../imgs/icons/hellorubriclogo.png';
import discordlogo from '../imgs/icons/discordcolorlogo.png';
import addsonglogo from '../imgs/icons/addsonglogo.png';
import googleformsicon from '../imgs/icons/googleformsicon.png';


const QuickLinks = () => {
    const quickLinks = [];

    const addQuickLink = (image, text, link, isOpen, isNew) => quickLinks.push({ image, text, link, isOpen, isNew });

    addQuickLink(
        googleformsicon,
        'K-Fest Assigned Performance Sign-up',
        'https://forms.gle/7dJNbEfny3KFMGtJA',
        true, true);
    addQuickLink(
        googleformsicon,
        'K-Fest Independent Group Sign-up',
        'https://forms.gle/MDp8fYSgtuKUud4z5',
        true, true);
    addQuickLink(
        rubriclogo,
        'Merch',
        'https://campus.hellorubric.com/?s=7805',
        true, true);
    addQuickLink(
        rubriclogo,
        'Memberships & Ticket Sales',
        'https://campus.hellorubric.com/?s=7805',
        true, false);
    addQuickLink(
        discordlogo,
        'KDT Discord',
        'https://discord.com/invite/tbKkvjV2W8',
        true, false);
    addQuickLink(addsonglogo,
        'KPop Dance Song Requests',
        'https://forms.gle/yVZcBeKBWPCm235aA',
        true, false);


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
                            isNew={ql.isNew}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default QuickLinks;
