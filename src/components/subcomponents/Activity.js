import '../../output.css';


const Activity = ({ image, title, text }) => {

    return (
        <div className='flex flex-wrap lg:flex-nowrap w-full h-full justify-center items-center my-0 xl:my-10'>
            <div className='hl block lg:hidden'></div>
            <div className='vl hidden lg:block'></div>
            <img className='drop-shadow-3xl point w-5/6 lg:w-2/4 h-auto 
                            rounded-2xl lg:translate-x-0 lg:hover:translate-x-16 t200e'
                src={image} alt={title} />
            <div className='w-4/5 lg:w-2/5 m-3 lg:m-10 z-0'>
                <h1 className='paragraph font-bold lg:subtitle text-lightblue-100 my-5'>{title}</h1>
                <p className='lg:paragraph text-white mx-5'>{text}</p>
            </div>
        </div>
    )

}

export default Activity;