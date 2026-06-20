import React, { useRef, useEffect } from 'react';
import { ContainerScroll } from '../components/ContainerScroll'; // Assuming this handles some scrolling animations or visibility effects
import '../pages/Services.css';
import '../assets/fonts/fonts.css';
import Image1 from "../assets/OurWorkPagePhotos/10.png";
import Image2 from "../assets/OurWorkPagePhotos/Our_1.png";
import Image3 from "../assets/OurWorkPagePhotos/23.png";
import Image4 from "../assets/OurWorkPagePhotos/26.png";
import Image5 from "../assets/OurWorkPagePhotos/18.png";
import Image6 from "../assets/OurWorkPagePhotos/20.png";
import Image7 from "../assets/OurWorkPagePhotos/21.png";
import { setMeta } from '../utils/meta';

const servicesData = [
  { title: 'Haldi Function', description: 'Make your Haladi ceremony vibrant and memorable with our unique decoration and event planning services.', image: Image1 },
  { title: 'Wedding Decoration', description: 'From the pre-wedding ceremonies to the wedding day, we manage everything to make your big day perfect.', image: Image2 },
  { title: 'Anniversaries and Milestones', description: 'Our expert decorators transform your wedding venue into a magical setting tailored to your preferences.', image: Image3 },
  { title: 'Themed Parties', description: 'Celebrate your reception with elegance and style with our comprehensive event management services.', image: Image4 },
  { title: 'Baby Showers', description: 'Whether it’s a birthday, anniversary, or any other celebration, we create unforgettable parties.', image: Image5 },
  { title: 'Corporate Events', description: 'We handle all aspects of college fests, ensuring a seamless and exciting event for all participants.', image: Image6 },
  { title: 'Destination Weddings', description: 'Professional event planning and management services for corporate events, meetings, and conferences.', image: Image7 }
];

const Services = () => {
  const ref = useRef(null);

  useEffect(() => {
    setMeta({
      title: "Event Services | SRS Events and Productions",
      description:
        "Explore SRS Events and Productions services: haldi, weddings, receptions, themed parties, corporate events, baby showers, destination weddings, and custom decor across Shivamogga, Bangalore, Mysore, and Mangalore.",
      keywords: [
        "SRS Events services",
        "wedding decoration Shivamogga",
        "haldi decor planners",
        "corporate event services Karnataka",
        "destination wedding planners",
        "theme parties and receptions",
      ],
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.5 }
    );

    const descriptions = ref.current.querySelectorAll('.service-content');
    descriptions.forEach(desc => observer.observe(desc));
    return () => descriptions.forEach(desc => observer.unobserve(desc));
  }, []);

  return (
    <section className="services" ref={ref}>
      <h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Where Ambiance Meets Style
      </h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <ContainerScroll key={index} titleComponent={<h3 className="service-title">{service.title}</h3>}>
            <div className="service-content">
              <img src={service.image} alt={service.title} className="service-image" />
              <p>{service.description}</p>
            </div>
          </ContainerScroll>
        ))}
      </div>
    </section>
  );
};

export default Services;
