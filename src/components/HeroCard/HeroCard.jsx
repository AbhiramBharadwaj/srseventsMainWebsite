import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import './HeroCard.css'; // Ensure you have a CSS file for custom styles

// Dummy image imports - replace these with your actual image paths
import MusicEvent from "../../assets/OurWorkPagePhotos/32.png";
import CorporateEvent from "../../assets/OurWorkPagePhotos/33.png";
import SpecialEvent from "../../assets/OurWorkPagePhotos/34.png";
import SportsEvent from "../../assets/sports-event.png";
import BridalMakeup from "../../assets/OurWorkPagePhotos/27.png";
import PhoAndVideo from "../../assets/OurWorkPagePhotos/28.png";
import SangeethNight from "../../assets/OurWorkPagePhotos/29.png";
import Catering from "../../assets/OurWorkPagePhotos/30.png";
import SoundsAndLights from "../../assets/gifs/3.gif";
import BackgroundImage from "../../assets/background.jpeg";

const WhatWeDoData = [
  {
    title: "PHOTOGRAPHY & VIDEOGRAPHY",
    image: PhoAndVideo,
    description: "Capturing your moments with precision and beauty.",
    aosDelay: "200",
  },
  {
    title: "CATERING",
    image: Catering,
    description: "Delicious cuisines to complement your events.",
    aosDelay: "400",
  },
  {
    title: "BRIDAL MAKEUP",
    image: BridalMakeup,
    description: "Enhancing your beauty for that special day.",
    aosDelay: "600",
  },
  {
    title: "SOUNDS & LIGHTINGS",
    image: SoundsAndLights,
    description: "Creating the perfect ambiance for your events.",
    aosDelay: "800",
  },
  {
    title: "MUSIC EVENTS",
    image: MusicEvent,
    description: "Live music to energize and entertain.",
    aosDelay: "200",
  },
  {
    title: "CORPORATE EVENTS",
    image: CorporateEvent,
    description: "Professional settings for corporate occasions.",
    aosDelay: "400",
  },
  {
    title: "WEDDING EVENTS",
    image: SpecialEvent,
    description: "Making your special day unforgettable.",
    aosDelay: "600",
  },
  {
    title: "SANGEETH NIGHT",
    image: SangeethNight,
    description: "A night of music, dance, and celebration.",
    aosDelay: "800",
  },
];

const HeroCard = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    cards.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.3, // Adjusted duration for smooth animation
            ease: "power1.out", // Smooth ease
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.3, // Adjusted duration for smooth animation
            ease: "power1.out", // Smooth ease
          });
        });
      }
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              duration: 0.3,
              ease: "power1.out",
            });
          });
          card.removeEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power1.out",
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
    <section className="bg-black text-white py-16 relative"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center relative z-10">
        <div className="relative inline-block mb-8">
          <h2 className="text-5xl font-bold mb-8 relative z-10 custom-font">
            {splitText("WHAT WE DO")}
          </h2>
        </div>
        <p className="text-xl mb-12">
          At Golden Eventz, we specialize in transforming ordinary occasions into unforgettable experiences. Our expertise lies in comprehensive event management, where creativity meets coordination to deliver exceptional results.
        </p>
        <div className="row">
          {WhatWeDoData.map((data, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card bg-dark text-white h-100" ref={(el) => cardsRef.current[index] = el}>
                <img
                  src={data.image}
                  alt={data.title}
                  className="card-img-top"
                  style={{ filter: 'brightness(1.2)' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text flex-grow-1">{data.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default HeroCard;
