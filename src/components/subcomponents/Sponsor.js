import React from 'react';
import locationLogo from '../../imgs/icons/locationlogo.png';
import newtabLogo from '../../imgs/icons/newtablogo.png';
import newtablogoWhite from '../../imgs/icons/newtablogowhite.png';

const Sponsor = ({ image, title, location, mapLink, text, websiteLink }) => {
    return (
        <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/10 border border-white/10 w-full max-w-md mx-auto mb-8">
            {/* Sponsor logo area */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkslateblue/90 z-10"></div>
                <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center p-6 bg-darkslateblue/30 transition-all duration-300 group-hover:bg-darkslateblue/10">
                        <img
                            src={image}
                            alt={title}
                            className="object-contain max-h-32 t200e group-hover:scale-110"
                        />
                    </div>
                </a>
            </div>

            {/* Sponsor content */}
            <div className="p-6 text-center">
                <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mb-3 group"
                >
                    <h2 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-yellow-200">
                        {title}
                    </h2>
                    <img
                        src={newtablogoWhite}
                        alt="Visit website"
                        className="w-4 h-4 ml-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </a>

                <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center mb-4 px-4 py-2 bg-blue-500/20 rounded-full text-white/90 transition-all duration-300 hover:bg-blue-500/30 mx-auto w-max"
                >
                    <img src={locationLogo} alt="Location" className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{location}</span>
                    <img src={newtabLogo} alt="Open map" className="w-3 h-3 ml-2 opacity-70" />
                </a>

                <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-200 font-medium text-sm">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
