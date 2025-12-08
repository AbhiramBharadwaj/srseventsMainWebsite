import React, { useState } from 'react';

const FAQItem = ({ title, text, isOpen, onClick }) => {
  return (
    <div className={`hs-accordion ${isOpen ? 'hs-accordion-active:bg-gray-100 dark:hs-accordion-active:bg-white/10' : ''} rounded-xl p-6`}>
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {title}
        <svg
          className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isOpen ? 'hidden' : 'block'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isOpen ? 'block' : 'hidden'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-800 dark:text-neutral-200">{text}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "What services does Golden Eventz offer?",
      text: "Golden Eventz specializes in a wide range of event management services, including corporate events, weddings, private parties, and conference planning. We provide full-service planning, which covers everything from venue selection to post-event clean-up."
    },
    {
      title: "How do I start planning an event with Golden Eventz?",
      text: "To begin planning your event with us, simply reach out via our contact form on our website or give us a call. One of our event coordinators will schedule an initial consultation to discuss your needs, budget, and vision for the event."
    },
    {
      title: "What is the average cost of hosting an event with Golden Eventz?",
      text: "The cost of event management services can vary widely based on the type of event, the number of guests, location, and specific services required. We offer customized quotes to fit every budget and event scale, ensuring you get the best value for your money."
    },
    {
      title: "Does Golden Eventz provide services for destination events?",
      text: "Absolutely! We have extensive experience planning and executing events in various locations both domestically and internationally. We ensure seamless logistics, no matter where your event takes place."
    },
    {
      title: "Can Golden Eventz help with event promotion?",
      text: "Yes, we can assist with the promotion of your event. From digital marketing strategies to traditional advertising and public relations, we can manage all aspects of event promotion to ensure your event reaches its target audience."
    },
    {
      title: "How can I provide feedback on the services received from Golden Eventz?",
      text: "Your feedback is invaluable to us. After the event, you will receive a feedback form via email, or you can directly provide your thoughts through our website. We strive to continuously improve our services based on the feedback we receive from our clients."
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
      </div>
      {/* End Title */}

      <div className="max-w-2xl mx-auto">
        {/* Accordion */}
        <div className="hs-accordion-group">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              title={item.title}
              text={item.text}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        {/* End Accordion */}
      </div>
    </div>
  );
};

export default FAQ;
