import React from 'react';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    heading: 'Nature of Service',
    body:
      'SRS Events and Productions primarily delivers service-based offerings such as event planning, production, decor, coordination, and consultation. No physical products are typically shipped through srsevents.co.in unless explicitly mentioned in a custom contract.',
  },
  {
    heading: 'Service Delivery Timelines',
    body:
      'Service delivery timelines vary based on event date, scope, approvals, venue requirements, and vendor availability. Final execution schedules are shared with clients during planning and confirmation stages.',
  },
  {
    heading: 'Digital and On-Ground Fulfilment',
    body:
      'Quotes, proposals, consultations, and planning updates may be delivered digitally by phone, email, or messaging. On-ground event services are delivered at the agreed venue and event date as per confirmed scope.',
  },
  {
    heading: 'Support',
    body:
      'For delivery-related questions, contact srseventofficials@gmail.com or +91 8660964776.',
  },
];

const ShippingAndDelivery = () => (
  <PolicyPage
    title="Shipping and Delivery Policy"
    description="This page explains how service delivery works for bookings and enquiries made through srsevents.co.in."
    sections={sections}
  />
);

export default ShippingAndDelivery;
