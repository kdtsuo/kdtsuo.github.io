import React from 'react';
import '../../output.css';

const Activity = ({ image, title, text, reverse }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
        w-full justify-center items-center gap-8 my-12 p-2 lg:my-20 overflow-hidden`}>
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    className="w-11/12 lg:w-5/6 h-auto rounded-xl shadow-lg 
                    t200e hover:scale-105 object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="w-full lg:w-1/2 p-6 bg-slate-800 backdrop-blur-sm rounded-xl shadow-lg max-w-lg 
            t200e hover:-translate-y-3 
            ">
                <h2 className="text-2xl lg:text-3xl font-bold text-lightblue-100 mb-4 capitalize">{title}</h2>
                <p className="text-lg text-white leading-relaxed">{text}</p>
            </div>
        </div>
    );
};

export default Activity;