
import chuugif from '../imgs/chuugif.gif';

const Farewell = () => {

    return (
        <div className="py-5">
            <h1 className="text-2xl lg:text-4xl text-darkslategrey text-center leading-relaxed m-5">
                Thank you for visiting our website ! <br />
                We love chuu &gt;-&lt;! <br />
            </h1>
            <img src={chuugif} alt="chuugif" className="w-3/4 lg:w-1/3 h-auto mx-auto" />
        </div>
    )
}

export default Farewell;