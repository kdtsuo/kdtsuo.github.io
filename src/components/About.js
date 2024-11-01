import '../output.css';
import teamphoto from '../imgs/team.jpeg';
import chevron from '../imgs/icons/rightchevron.png';


const About = () => {
    return (
        <div>
            <div id='about' className=''>
            </div>
            <div className=' items-center'>


                <div className='flex flex-wrap lg:flex-nowrap items-center justify-center'>


                    <div className='w-screen h-screen relative overflow-hidden '>
                        <img className='absolute inset-0 object-cover w-full h-full brightness-[0.5]' src={teamphoto} alt='team' />

                        <div className='relative flex flex-col justify-center items-center h-full p-4 text-white'>
                            <div>
                                <h1 className='text-3xl font-bold lg:text-4xl text-center my-5 text-lightblue-100'>What is KDT?</h1>
                                <p className='text-xl lg:paragraph  text-center max-w-screen-sm'>
                                    The KPop Dance Team (KDT), is a team consisting of diverse,
                                    unique individuals that have common interests in dancing,
                                    choreographing, and performing to promote korean pop-culture,
                                    and have fun!
                                </p>
                            </div>
                            <a href="#activities" className="my-5 flex items-center group btn-lightblue paragraph t200e">
                                Learn more
                                <span><img className='ml-3 w-5 h-auto -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 t200e' src={chevron} alt="chevron icon"></img></span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
            <div id='activities' ></div>
        </div >

    )
}

export default About;