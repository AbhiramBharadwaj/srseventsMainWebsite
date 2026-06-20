import React from 'react';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    heading: 'Information We Collect',
    body:
      'We collect the information you submit through our website forms, including your name, contact number, event requirements, and message details. We may also collect basic technical information such as browser type and pages visited for website performance analysis.',
  },
  {
    heading: 'How We Use Information',
    body:
      'SRS Events and Productions uses this information to respond to enquiries, share quotations, coordinate event discussions, process service requests, and improve customer support. We do not sell your personal information to third parties.',
  },
  {
    heading: 'Sharing and Security',
    body:
      'Your data is only shared with team members, service partners, or payment providers when required to deliver requested services. We take reasonable steps to protect submitted information from unauthorized access, misuse, or disclosure.',
  },
  {
    heading: 'Contact',
    body:
      'For privacy-related questions, contact SRS Events and Productions at srseventofficials@gmail.com or call +91 8660964776.',
  },
];

const PrivacyPolicy = () => (
  <PolicyPage
    title="Privacy Policy"
    description="This Privacy Policy explains how SRS Events and Productions collects, uses, and protects customer information submitted through srsevents.co.in."
    sections={sections}
  />
);

export default PrivacyPolicy;
