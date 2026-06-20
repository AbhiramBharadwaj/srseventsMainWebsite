import React from 'react';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    heading: 'Cancellation by Client',
    body:
      'Event cancellations must be requested in writing. Refund eligibility depends on the project stage, vendor commitments already made, materials procured, and time reserved for the event.',
  },
  {
    heading: 'Refund Processing',
    body:
      'Approved refunds, if any, are processed after deducting non-recoverable booking amounts, planning fees, committed vendor advances, and completed work. Refund timelines generally range from 7 to 14 business days from confirmation.',
  },
  {
    heading: 'Rescheduling',
    body:
      'If the event is rescheduled instead of cancelled, existing payments may be adjusted toward the revised event date subject to venue availability, vendor commitments, and revised project costing.',
  },
  {
    heading: 'Company-Initiated Cancellation',
    body:
      'If SRS Events and Productions is unable to deliver due to reasons within our control, we will discuss suitable alternatives or applicable refund settlement with the client.',
  },
];

const CancellationAndRefund = () => (
  <PolicyPage
    title="Cancellation and Refund Policy"
    description="This policy explains how cancellation requests, rescheduling, and refund decisions are handled for bookings made with SRS Events and Productions."
    sections={sections}
  />
);

export default CancellationAndRefund;
