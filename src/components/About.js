import '../output.css';
import teamphoto from '../imgs/team.jpeg';


const About = () => {
    return (
        <div>
            <div id='about' className='py-10'>

            </div>
            <div className=' items-center mp5 '>

                <h1 className='title text-center text-darkslateblue my-10'>About us!</h1>

                <div className='flex flex-wrap lg:flex-nowrap items-center justify-center'>
                    <img className='m-5 lg:m-16 w-full lg:w-4/6 h-auto rounded-2xl point zoomin-sm t200e drop-shadow-2xl' src={teamphoto} alt='team' />

                    <div>
                        <h1 className='paragraph lg:subtitle text-center my-5'>What is KDT?</h1>
                        <p className='text-2xl lg:paragraph text-center p-5'>
                            The KPop Dance Team (KDT), is a team consisting of diverse,
                            unique individuals that have common interests in dancing,
                            choreographing, and performing to promote korean pop-culture,
                            and have fun!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;