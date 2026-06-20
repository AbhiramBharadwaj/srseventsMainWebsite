import React, { useEffect } from 'react';
import { setMeta } from '../utils/meta';

const PolicyPage = ({ title, description, sections }) => {
  useEffect(() => {
    setMeta({
      title: `${title} | SRS Events and Productions`,
      description,
      keywords: [
        'SRS Events and Productions',
        title,
        'srsevents.co.in',
        'Razorpay compliance',
      ],
    });
  }, [title, description]);

  return (
    <section className="min-h-screen bg-[#050505] text-white pt-28 pb-16 px-4">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl backdrop-blur-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">srsevents.co.in</p>
        <h1 className="mb-4 text-3xl font-semibold md:text-5xl">{title}</h1>
        <p className="mb-8 text-base leading-7 text-white/70 md:text-lg">{description}</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-3 text-xl font-semibold md:text-2xl">{section.heading}</h2>
              <p className="whitespace-pre-line text-sm leading-7 text-white/75 md:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
