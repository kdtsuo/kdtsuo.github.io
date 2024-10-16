import '../output.css';
import bgImage from '../imgs/joinourteam.jpeg';
import googleformsicon from '../imgs/icons/googleformsicon.png';
import Link from './subcomponents/Link';

const Positions = () => {

    const positions = [];

    const addPosition = (image, text, link, isOpen) => positions.push({ image, text, link, isOpen });


    addPosition(
        googleformsicon,
        'Senior Executive Team',
        'https://docs.google.com/forms/d/1YMoKte_cJbfpB5aNznMBXluWn8goLhte7Wpp3GkHVVI',
        false)

    addPosition(
        googleformsicon,
        'Junior Executive Team',
        'https://docs.google.com/forms/d/e/1FAIpQLSeLKmqK6ibtHO8HfItMOioxKjP5kmHdHzQFd4DtF6I3SLpiUg',
        false)
    addPosition(
        googleformsicon,
        'Dance Instructor',
        'https://docs.google.com/forms/d/e/1FAIpQLScTk4EakTgfma8fo72t0mJugyb5VFeL5sEKBlm_A_hXnK4WUg/',
        false)
    addPosition(
        googleformsicon,
        'Performance Team',
        'https://docs.google.com/forms/d/e/1FAIpQLSdDBK_xgyeub7Przux1Lle2Ax-c_BDmN0B79Qpf7nKK-PJaXA/',
        false)
    addPosition(
        googleformsicon,
        'Cameraman Application',
        'https://docs.google.com/forms/d/e/1FAIpQLScVl_PS4pdEdQ_4HwN6OO761pMiz7moYdwuyBTdnEsGE2dj3A/',
        true)




    return (
        <div>
            <div id='positions' className="my-20 w-screen h-screen relative overflow-hidden drop-shadow-3xl">
                <img
                    className="absolute inset-0 object-cover w-full h-full brightness-75"
                    src={bgImage}
                    alt="cover"
                />
                <div className="relative flex flex-col justify-center items-center h-full p-4">
                    <h1 className="title text-lightblue text-center">
                        Did we
                        <span className='text-yellow-100'> excite </span>
                        you?
                    </h1>
                    <h2 className="p-10 paragraph text-white text-center w-full">
                        Or do you have a passion for <br />
                        <span className='text-yellow-400'> dancing </span>
                        and
                        <span className='text-yellow-400'> performing</span>?
                        <br />Join us and be part of our team!
                    </h2>
                    <a href="#available-positions" className="btn-lightblue paragraph t200e">
                        Apply now!
                    </a>
                </div>


            </div>

            <h1 id='available-positions' className='title text-center text-darkslateblue my-10'>Positions!</h1>
            <div className='flex flex-wrap justify-center items-center mp5'>
                {positions.map((position, index) => {
                    return (
                        <Link
                            key={index}
                            image={position.image}
                            text={position.text}
                            link={position.link}
                            isOpen={position.isOpen}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Positions;