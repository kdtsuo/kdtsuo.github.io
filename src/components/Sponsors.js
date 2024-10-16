import '../output.css';
import Sponsor from './subcomponents/Sponsor';
import bubblewaffle from '../imgs/sponsors/bubblewaffle.png';
import formosa from '../imgs/sponsors/formosa.png';
import tossingpizzeria from '../imgs/sponsors/tossingpizzeria.jpeg';
import macaoimperialtea from '../imgs/sponsors/macaoimperialtea.webp';


const Sponsors = () => {
    const Sponsors = [];
    const addSponsor = (image, title, location, mapLink, text, websiteLink) => {
        Sponsors.push({ image, title, location, mapLink, text, websiteLink });
    }

    addSponsor(
        macaoimperialtea,
        'Macao Imperial Tea',
        '590 Hwy 33 W #23, Kelowna',
        'https://www.google.ca/maps/place/Macao+Imperial+Tea/@49.8896423,-119.4000558,17z/data=!3m2!4b1!5s0x537d8d254aed5519:0xcfc309a147be2f5b!4m6!3m5!1s0x537d8de1f6a33909:0x884826c2eda55afd!8m2!3d49.8896389!4d-119.3974809!16s%2Fg%2F11tjx7cm31?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
        'Up to 15% off for KDT members!',
        'https://www.macaoimperialteacanada.com/'
    )

    addSponsor(
        tossingpizzeria,
        'Tossing Pizzeria',
        '975 Academy Way #120, Kelowna',
        'https://www.google.ca/maps/place/Tossing+Pizzeria/@49.9350734,-119.4035122,17z/data=!3m1!4b1!4m6!3m5!1s0x537d8d9a4dffe3cf:0xf3f5a3a909ce0167!8m2!3d49.93507!4d-119.3986413!16s%2Fg%2F11hnt50t51?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
        'Up to 15% off for KDT members!',
        'https://www.tossingpizzeria.com/'
    )

    addSponsor(
        bubblewaffle,
        'Bubble Waffle Cafe',
        '5538 Airport Way #102, Kelowna',
        'https://www.google.ca/maps/place/%E9%B8%A1%E8%9B%8B%E4%BB%94+Bubble+Waffle+Cafe+(Chinese+Restaurant)/@49.9508013,-119.3867347,17z/data=!3m2!4b1!5s0x537ded77da6dd3e9:0x1754ea70f96d416c!4m6!3m5!1s0x537ded5b5af637c7:0x58f6b1e233da392!8m2!3d49.9507979!4d-119.3841598!16s%2Fg%2F11v3yzttsy?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
        'Up to 12% off for KDT members!',
        'https://www.bubblewafflecafe.ca/'
    )

    addSponsor(
        formosa,
        'Formosa Tea Cafe',
        '1970 Kane Rd Unit 210, Kelowna',
        'https://www.google.ca/maps/place/Formosa+Tea+Cafe+-+Glenmore+Location+(Bubble+Tea)/@49.9151098,-119.4450163,17z/data=!3m1!4b1!4m6!3m5!1s0x537df363e212f627:0x6cc37747be5faec5!8m2!3d49.9151064!4d-119.4424414!16s%2Fg%2F11tdbmlwh7?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D',
        'Up to 10% off for KDT members!',
        'https://www.formosateacafe.ca/'
    )



    return (
        <div>
            <div id='sponsors' className='py-10'>

            </div>

            <div id='sponsors' className='bg-darkslateblue items-center p-5 drop-shadow-3xl py-10'>
                <h1 className='title text-center text-lightblue my-10 p-5'>
                    Thank you to our
                    <span className='text-yellow-200'> sponsors</span>!
                </h1>

                <div className='flex justify-center flex-col w-full items-center text-center '>
                    {Sponsors.map((sponsor, index) => (
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
            </div>
        </div>

    )
}

export default Sponsors;