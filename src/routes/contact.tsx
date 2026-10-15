import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { Contact } from '@/sections/Contact';
import { BookingForm } from '@/components/BookingForm';
import { SectionHeading } from '@/components/SectionHeading';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact & Booking Enquiries | Jabalpur Car Rental','Share your travel details and prepare a taxi enquiry for Jabalpur local rides, airport transfers, outstation travel and sightseeing.'),component:ContactPage});
function ContactPage(){return <><PageIntro eyebrow="Let’s talk travel" title="Start your next journey." description="Have an itinerary in mind? Share your details to prepare an enquiry. Bookings are finalized directly after fare and availability are confirmed."/><section className="section-space"><div className="site-container"><SectionHeading eyebrow="Your travel details" title="Where would you like to go?"/><div className="booking-panel"><BookingForm/></div></div></section><Contact/></>;}
