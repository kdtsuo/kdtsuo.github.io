/* eslint-disable react/jsx-no-target-blank */
import locationLogo from '../../imgs/icons/locationlogo.png';


const Sponsor = ({ image, title, location, mapLink, text, websiteLink }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:w-4/6 h-auto justify-start items-center my-5 p-5 md:mp5 border-white border-4 rounded-3xl bg-transparent hover:bg-lightblue t200e group">
            <img className='w-4/6 lg:max-w-64 h-auto m-5 md:mx-10' src={image} alt='' />
            <div className='m-5'>
                <h1 className="text-4xl md:text-6xl font-bold text-white group-hover:text-darkslategrey">
                    {title}
                </h1>
                <a href='https://maps.google.ca' target='_blank'>
                    <div className='inline-flex btn-lightblue my-5 items-center t200e'>
                        <img className='w-5 h-5' src={locationLogo} alt='location icon' />
                        <p className='mx-5 font-light text-darkslategrey text-xl md:text-2xl'>{location}</p>
                    </div>
                </a>
                <br />
                <div className='inline-flex rounded-full bg-yellow-300 px-6 py-3 items-center t200e w-auto'>
                    <p className='font-extrabold text-black text-xl md:text-2xl'>
                        {text}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Sponsor;