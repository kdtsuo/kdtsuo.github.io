/* eslint-disable react/jsx-no-target-blank */
import '../../output.css';
import rightChevron from '../../imgs/icons/rightchevron.png';


const Link = ({ image, text, link, isOpen }) => {

    return (
        <a href={link} target='_blank' className={`${isOpen ? 'isOpen' : 'notOpen'} 
        btn-lightblue py-5 lg:py-10 my-4 w-full md:w-4/6 lg:w-5/6 
        zoomin-sm t200e group drop-shadow-box`}>
            <div className='flex items-center'>
                <img className='w-8 lg:w-12 h-auto' src={image} alt='icon' />
                <h1 className='flex-auto text-center text-md lg:text-4xl font-medium'>
                    {text}
                </h1>

                <img className='-translate-x-40 w-4 lg:w-8 h-auto t100d200e opacity-0 group-hover:translate-x-0 group-hover:opacity-100' src={rightChevron} alt='right chevron' />

            </div>
        </a>
    )

}

export default Link;