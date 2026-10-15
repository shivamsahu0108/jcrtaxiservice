import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
const questions = [
 ['How do I book a taxi in Jabalpur?','Share your pickup, destination, travel date, time and passenger count using the enquiry form. Finalize the vehicle, fare and booking directly with the team through WhatsApp or phone.'],
 ['How are taxi fares calculated?','Fares depend on your route, trip type, vehicle, duration and travel requirements. Request a quote and confirm inclusions, tolls, parking and any additional charges before booking.'],
 ['Can I arrange an airport transfer?','You can enquire about pickups and drop-offs at Jabalpur Airport. Share your flight schedule, luggage needs and passenger count so the pickup can be planned.'],
 ['Which vehicle options can I request?','You can request a Dzire, Ertiga, Innova or Innova Crysta. Seating configuration, luggage space, vehicle condition and availability should be confirmed for your trip.'],
 ['Are one-way taxis available?','One-way taxi enquiries are welcome. Share the destination and travel date to check availability and receive a journey-specific quote.'],
 ['Can I book an outstation or sightseeing journey?','Yes, enquire about outstation and sightseeing trips across Madhya Pradesh. Discuss the itinerary, waiting time, return plans and any park entry arrangements separately.'],
];
export function FAQ() { return <section className="section-space why-section"><div className="site-container faq-layout"><SectionHeading eyebrow="Good to know" title={<>A few questions.<br/>Clear answers.</>} description="A little clarity before you get on the road."/><div className="faq-list">{questions.map(([question,answer])=><details key={question}><summary>{question}<Plus/></summary><p>{answer}</p></details>)}</div></div></section>; }
