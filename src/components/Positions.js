import '../output.css';
import bgImage from '../imgs/joinourteam.jpeg';
import googleformsicon from '../imgs/icons/googleformsicon.png';
import Link from './subcomponents/Link';
import chevron from '../imgs/icons/rightchevron.png';

const Positions = () => {

    const positions = [];

    const addPosition = (image, text, link, isOpen) => positions.push({ image, text, link, isOpen });


    addPosition(
        googleformsicon,
        'Senior Executive Team',
        'https://forms.gle/CiTr1LpiXyptXst96',
        false)

    addPosition(
        googleformsicon,
        'Junior Executive Team',
        'https://forms.gle/F31xhy3w14fLz4Xp6',
        false)
    addPosition(
        googleformsicon,
        'Dance Instructor',
        'https://forms.gle/t6PtCmFE97UQ41H48',
        false)
    addPosition(
        googleformsicon,
        'Performance Team',
        'https://forms.gle/uu783cDkQr49ckvs6',
        false)

    addPosition(
        googleformsicon,
        'Cameraman',
        'https://forms.gle/VAXETY3AUEiwELo56',
        true)

    positions.sort((a, b) => b.isOpen - a.isOpen);

    return (
        <div>
            <div id='positions' className=" w-screen h-screen relative overflow-hidden drop-shadow-3xl">
                <img
                    className=" absolute inset-0 object-cover w-full h-full brightness-[0.40]"
                    src={bgImage}
                    alt="cover"
                />
                <div className="relative flex flex-col justify-center items-center h-full p-4">
                    <h1 className="title text-lightblue-100 text-center ">
                        Did we
                        <span className='text-yellow-100'> excite </span>
                        you?
                    </h1>
                    <h2 className=" paragraph text-white text-center w-full my-5">
                        Or do you have a passion for <br />
                        <span className='text-yellow-400'> dancing </span>
                        and
                        <span className='text-yellow-400'> performing</span>?
                        <br />Join us and be part of our team!
                    </h2>
                    <a href="#available-positions" className="flex items-center group btn-lightblue paragraph t200e">
                        Apply now
                        <span><img className='ml-3 w-5 h-auto -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 t200e' src={chevron} alt="chevron icon"></img></span>
                    </a>
                </div>
                <div id='available-positions'>

                </div>
            </div>

            <div className='bg-lightblue-400 py-20'>
                <h1 className='title text-center text-darkslateblue '>Positions!</h1>
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
        </div>
    )
}

export default Positions;