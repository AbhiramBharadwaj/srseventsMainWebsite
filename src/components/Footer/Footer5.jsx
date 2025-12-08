import React from "react";
import './Footer5.css';
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const Footer5 = () => {

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
  };
  
  return (
    <div className="bg-gray-800 text-white">
      <section className="max-w-[1200px] mx-auto py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Be Ready To Grow</h1>
            <p className="text-gray-400">
              Get exclusive <span className="font-bold text-white">best update</span> straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                className="py-2 px-3 flex-grow bg-gray-800 border-2 border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-600 py-2 px-6 text-white">Ok</button>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Important Links</h1>
            <ul className="space-y-2">
            <li className="cursor-pointer" onClick={scrollToTop}>
  Home
</li>
              <li className="cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/our-work">Our Work</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/Services">Services</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <HiLocationMarker />
                <p>Shimoga, Karnataka</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMessage />
                <p>goldeneventmanagement.in@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall />
                <p>+91 7411820612</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-gray-300/40 mt-6">
          <div>
            <span className="text-sm text-gray-400">&copy; 2024 Created by </span>
            <Tippy content="Abhiram is a Full Stack Developer passionate about creating impactful digital experiences.">
              <a href="https://wa.me/9880739285" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white cursor-pointer">
                @abhiram
              </a>
            </Tippy>
          </div>
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/goldeneventz.co/"><FaInstagram className="text-2xl" /></a>
            <a href="https://www.youtube.com/watch?v=SYgAXOGn5m4"><FaYoutube className="text-2xl" /></a>
            <a href="https://wa.me/7411820612?text=I'm%20interested%20to%20know%20more%20about%20Golden Eventz"><FaWhatsapp className="text-2xl" /></a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Footer5;