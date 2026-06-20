import React from 'react';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    heading: 'Service Scope',
    body:
      'SRS Events and Productions provides event planning, decor, production, coordination, and related event services based on mutually agreed proposals, quotations, and timelines.',
  },
  {
    heading: 'Bookings and Payments',
    body:
      'Bookings are confirmed only after advance payment or written confirmation as agreed with the client. Balance payments must be completed according to the agreed schedule before event execution or handover.',
  },
  {
    heading: 'Client Responsibilities',
    body:
      'Clients are responsible for sharing accurate event details, approvals, guest counts, venue access information, and timely decisions required for successful execution. Delays in approvals may affect timelines and deliverables.',
  },
  {
    heading: 'Liability',
    body:
      'While we work to deliver every event as committed, SRS Events and Productions is not liable for delays or failures caused by force majeure, venue restrictions, government actions, weather conditions, or third-party vendor disruptions outside our reasonable control.',
  },
  {
    heading: 'Contact',
    body:
      'For questions about these terms, contact srseventofficials@gmail.com or +91 8660964776.',
  },
];

const TermsAndConditions = () => (
  <PolicyPage
    title="Terms and Conditions"
    description="These Terms and Conditions govern the use of srsevents.co.in and the event services provided by SRS Events and Productions."
    sections={sections}
  />
);

export default TermsAndConditions;
