/* eslint-disable react/jsx-no-target-blank */
import locationLogo from '../../imgs/icons/locationlogo.png';


const Sponsor = ({ image, title, location, mapLink, text, websiteLink }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:w-4/6 h-auto 
        justify-start items-center my-5  md:mp5 border-white 
        border-4 rounded-xl bg-transparent hover:bg-blue-400 t200e group">
            <a href={websiteLink} target='_blank' className='flex justify-center items-center'>
                <img className='w-4/6 lg:w-64 h-auto m-5 md:mx-10 ' src={image} alt='' />
            </a>
            <div className='m-5 w-full'>
                <a href={websiteLink} target='_blank'>
                    <h1 className="text-3xl md:text-6xl font-bold text-white group-hover:text-darkslategrey">
                        {title}
                    </h1>
                </a>
                <a href={mapLink} target='_blank'>
                    <div className='inline-flex btn-lightblue my-5 items-center t200e'>
                        <img className='w-5 h-5' src={locationLogo} alt='location icon' />
                        <p className='mx-2 font-light text-darkslategrey text-sm md:text-2xl'>
                            {location}
                        </p>
                    </div>
                </a>
                <br />
                <div className='inline-flex fact-yellow '>
                    <p className='text-sm md:text-2xl'>
                        {text}
                    </p>
                </div>
            </div>
        </div >

    )
}

export default Sponsor;