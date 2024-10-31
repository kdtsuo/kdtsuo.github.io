/* eslint-disable react/jsx-no-target-blank */
import locationLogo from '../../imgs/icons/locationlogo.png';
import newtabLogo from '../../imgs/icons/newtablogo.png';
import newtablogoWhite from '../../imgs/icons/newtablogowhite.png';


const Sponsor = ({ image, title, location, mapLink, text, websiteLink }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:w-4/6 h-auto 
        justify-start items-center my-5  md:mp5 border-white 
        border-4 rounded-xl bg-transparent hover:bg-blue-400 t200e group">
            <a href={websiteLink} target='_blank' className='flex justify-center items-center'>
                <img className='w-4/6 lg:w-64 h-auto m-5 md:mx-10 ' src={image} alt='' />
            </a>
            <div className='m-5 w-full'>
                <a href={websiteLink} target='_blank' >
                    <div className=' flex justify-center'>
                        <h1 className="mx-2 text-3xl md:text-6xl font-bold text-white t200e hover:text-darkslategrey">
                            {title}
                        </h1>
                        <img className='newtab' src={newtablogoWhite} alt='new tab icon' />
                    </div>
                </a>
                <a href={mapLink} target='_blank'>
                    <div className='inline-flex btn-lightblue my-5 items-center t200e group'>
                        <img className='w-5 h-5' src={locationLogo} alt='location icon' />
                        <div className='flex justify-center'>
                            <p className='mx-2 font-light  text-lg md:text-2xl t200e'>
                                {location}
                            </p>
                            <img className='newtab-sm' src={newtabLogo} alt='new tab icon' />
                        </div>
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