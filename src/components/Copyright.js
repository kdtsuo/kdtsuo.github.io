import '../output.css';
import logo from '../imgs/rmlogo.png';

const Copyright = () => {
    return (
        <div className="text-center text-darkslategrey mp5 opacity-75 text-lg lg:text-2xl">
            <p>&#169; 2024 KDT ("KPop Dance Team") v2.0 &#9829;
                <br />All rights reserved. Website presented to you by
                <span className="flex justify-center items-center">
                    <a href="https://rinmeng.github.io" target="_blank" rel="noopener noreferrer">
                        <img className="w-36 h-auto" src={logo} alt="rin meng logo" />
                    </a>
                </span>
                See <a href="https://github.com/kdtsuo/kdtsuo.github.io?tab=AGPL-3.0-1-ov-file" target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-slate-400 t200e">GitHub</a> for more info on licensing.
            </p>
        </div>
    );
}

export default Copyright;