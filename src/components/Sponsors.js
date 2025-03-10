import React from 'react';
import '../output.css';
import Sponsor from './subcomponents/Sponsor';
import Link from './subcomponents/Link';

// Import sponsor images
import bubblewaffle from '../imgs/sponsors/bubblewaffle.png';
import formosa from '../imgs/sponsors/formosa.png';
import tossingpizzeria from '../imgs/sponsors/tossingpizzeria.jpeg';
import macaoimperialtea from '../imgs/sponsors/macaoimperialtea.webp';
import seoulful from '../imgs/sponsors/seoulful.png';
import rubriclogo from '../imgs/icons/hellorubriclogo.png';

const Sponsors = () => {
    const sponsors = [
        {
            image: seoulful,
            title: 'Seoulful Convenience',
            location: '1619 Ellis St',
            mapLink: 'https://www.google.ca/maps/place/Seoulful+Convenience/@49.885116,-119.4959369,17z/data=!3m1!4b1!4m6!3m5!1s0x537df52e4a80e70f:0x77812feb6aba0273!8m2!3d49.8851126!4d-119.493362!16s%2Fg%2F11lnhlpht6?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D',
            text: '5% off for KDT members!',
            websiteLink: 'https://seoulfulconvenience.ca'
        },
        {
            image: macaoimperialtea,
            title: 'Macao Imperial Tea',
            location: '590 Hwy 33 W #23',
            mapLink: 'https://www.google.ca/maps/place/Macao+Imperial+Tea/@49.8896423,-119.4000558,17z/data=!3m2!4b1!5s0x537d8d254aed5519:0xcfc309a147be2f5b!4m6!3m5!1s0x537d8de1f6a33909:0x884826c2eda55afd!8m2!3d49.8896389!4d-119.3974809!16s%2Fg%2F11tjx7cm31?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
            text: '15% off for KDT members!',
            websiteLink: 'https://www.macaoimperialteacanada.com/'
        },
        {
            image: tossingpizzeria,
            title: 'Tossing Pizzeria',
            location: '975 Academy Way #120',
            mapLink: 'https://www.google.ca/maps/place/Tossing+Pizzeria/@49.9350734,-119.4035122,17z/data=!3m1!4b1!4m6!3m5!1s0x537d8d9a4dffe3cf:0xf3f5a3a909ce0167!8m2!3d49.93507!4d-119.3986413!16s%2Fg%2F11hnt50t51?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
            text: '15% off for KDT members!',
            websiteLink: 'https://www.tossingpizzeria.com/'
        },
        {
            image: bubblewaffle,
            title: 'Bubble Waffle Cafe',
            location: '5538 Airport Way #102',
            mapLink: 'https://www.google.ca/maps/place/%E9%B8%A1%E8%9B%8B%E4%BB%94+Bubble+Waffle+Cafe+(Chinese+Restaurant)/@49.9508013,-119.3867347,17z/data=!3m2!4b1!5s0x537ded77da6dd3e9:0x1754ea70f96d416c!4m6!3m5!1s0x537ded5b5af637c7:0x58f6b1e233da392!8m2!3d49.9507979!4d-119.3841598!16s%2Fg%2F11v3yzttsy?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
            text: '12% off for KDT members!',
            websiteLink: 'https://www.bubblewafflecafe.ca/'
        },
        {
            image: formosa,
            title: 'Formosa Tea Cafe',
            location: '1970 Kane Rd Unit 210',
            mapLink: 'https://www.google.ca/maps/place/Formosa+Tea+Cafe+-+Glenmore+Location+(Bubble+Tea)/@49.9151098,-119.4450163,17z/data=!3m1!4b1!4m6!3m5!1s0x537df363e212f627:0x6cc37747be5faec5!8m2!3d49.9151064!4d-119.4424414!16s%2Fg%2F11tdbmlwh7?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
            text: '10% off for KDT members!',
            websiteLink: 'https://www.formosateacafe.ca/'
        }
    ];

    const quickLinks = [
        {
            image: rubriclogo,
            text: 'Become a member',
            link: 'https://campus.hellorubric.com/?s=7805',
            isOpen: true
        }
    ];

    return (
        <section id="sponsors" className="relative overflow-hidden py-16 px-4">
            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-darkslateblue z-0"></div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Thank you to our <span className="text-yellow-200">sponsors</span>!
                    </h2>
                    <div className="w-24 h-1 bg-yellow-200 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Sponsors grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sponsors.map((sponsor, index) => (
                        <Sponsor
                            key={index}
                            image={sponsor.image}
                            title={sponsor.title}
                            location={sponsor.location}
                            mapLink={sponsor.mapLink}
                            text={sponsor.text}
                            websiteLink={sponsor.websiteLink}
                        />
                    ))}
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {quickLinks.map((ql, index) => (
                        <Link
                            key={index}
                            image={ql.image}
                            text={ql.text}
                            link={ql.link}
                            isOpen={ql.isOpen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;