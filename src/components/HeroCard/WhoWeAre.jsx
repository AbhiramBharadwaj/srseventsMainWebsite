import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import BackgroundImage from "../../assets/background.jpeg"; // Replace with the path of your uploaded image
import WhoWeAre1 from "../../assets/WhoWeAre1.jpeg"; // Replace with the path of your uploaded image
import WhoWeAre2 from "../../assets/WhoWeAre2.jpeg"; // Replace with the path of your uploaded image
import WhoWeAre3 from "../../assets/WhoWeAre3.jpeg"; // Replace with the path of your uploaded image
import './WhoWeAre.css'; // Ensure you have a CSS file for custom styles

const WhoWeAre = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current;

    images.forEach((image) => {
      if (image) {
        image.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
            ease: "power3.out",
          });
        });
        image.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      }
    });

    return () => {
      images.forEach((image) => {
        if (image) {
          image.removeEventListener("mouseenter", () => {
            gsap.to(image, {
              scale: 1.1,
              duration: 0.5,
              ease: "power3.out",
            });
          });
          image.removeEventListener("mouseleave", () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          });
        }
      });
    };
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className={`letter inline-block ${char === ' ' ? 'mx-1' : ''}`}>
        {char}
      </span>
    ));
  };

  return (
    <section
      className="bg-black text-white py-16 relative"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="relative inline-block mb-8">
          <h2 className="text-5xl font-bold mb-8 relative z-10 custom-font">
            {splitText("WHO ARE WE")}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center mb-16">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <p className="text-xl">
              <strong className="font-semibold">Our mission</strong> is to craft state-of-the-art experiences with long term impact.
            </p>
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="w-px h-24 bg-gray-400 mx-auto"></div>
          </div>
          <div className="lg:w-1/3">
            <p className="text-xl">
              <strong className="font-semibold">Our vision</strong> is to progress the live entertainment industry and shape it for future generations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden group">
            <img
              ref={(el) => imagesRef.current[0] = el}
              src={WhoWeAre3}
              alt="Experience"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-6xl font-bold">6</h3>
                <p className="text-lg">YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              ref={(el) => imagesRef.current[1] = el}
              src={WhoWeAre2}
              alt="Events"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-6xl font-bold">100+</h3>
                <p className="text-lg">EVENTS PER YEAR</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              ref={(el) => imagesRef.current[2] = el}
              src={WhoWeAre1}
              alt="Professionals"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-6xl font-bold">50+</h3>
                <p className="text-lg">PROFESSIONALS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default WhoWeAre;