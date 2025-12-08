import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MountainPng from "../../assets/moon-surface-hd.png";
import { gsap } from "gsap";

const Hero = () => {
  const navigate = useNavigate();
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, {
          opacity: 0,
          scale: 4
        }, {
          opacity: 1,
          scale: 1,
          stagger: 0.07,
          duration: 1,
          ease: 'expo.out',
          delay: index * 0.07
        });
      }
    });
  }, []);

  const handleButtonClick = () => {
    navigate('/our-work');
  };

  const title = "Golden Eventz";
  const splitTitle = title.split("").map((letter, idx) => (
    <span key={idx} ref={(el) => textRef.current[idx] = el} className="inline-block" style={{ width: letter === ' ' ? '0.2em' : 'auto' }}>
      {letter}
    </span>
  ));

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 className="text-4xl font-bold teachers-light" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {splitTitle}
            </h1>
            <p className="teachers-light">
              Welcome to Golden Eventz, transform your vision into unforgettable moments. With five years of expertise, we specialize in weddings, New Year extravaganzas, and remarkable events.
            </p>
            <button
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 teachers-light"
              onClick={handleButtonClick}
            >
              Get Event Insights
            </button>
          </div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent to-primary h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Hero;
