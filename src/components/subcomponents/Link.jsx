/* eslint-disable react/jsx-no-target-blank */
import "../../output.css";
import rightChevron from "../../imgs/icons/rightchevron.png";
import newtablogo from "../../imgs/icons/newtablogo.png";

const Link = ({ image, text, link, isOpen, isNew }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`${isOpen ? "isOpen" : "notOpen"} 
        btn-lightblue py-5 lg:py-10 my-2 lg:my-5 w-full md:w-4/6 lg:w-5/6 
        zoomin-sm t200e group drop-shadow-box`}
    >
      {isNew && (
        <div className="z-10 text-xs lg:text-xl absolute top-0 right-0 m-1 rounded-lg lg:m-5 bg-yellow-400 px-2 text-darkslategrey">
          <h1>NEW</h1>
        </div>
      )}
      {!isOpen && (
        <div className="z-10 text-xs lg:text-xl absolute top-0 right-0 m-1 rounded-lg lg:m-5 bg-gray-500 px-2 text-white">
          <h1>NOT AVAILABLE</h1>
        </div>
      )}
      <div className="w-full flex items-center justify-between">
        <img className="w-8 lg:w-12 h-auto" src={image} alt="icon" />
        <div className="w-3/4 flex justify-center text-center">
          <h1 className=" text-center  text-md lg:text-4xl font-medium">
            {text}
          </h1>
        </div>
        <img
          className="-translate-x-40 w-4 lg:w-8 h-auto t200e opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          src={rightChevron}
          alt="right chevron"
        />
      </div>
    </a>
  );
};

export default Link;
