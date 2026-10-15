import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Contact } from '@/sections/Contact';
import road from '@/assets/road.jpg';
import { optimizedImage } from '@/config/metadata';
export const Route = createFileRoute('/about')({head:()=>pageHead('About Us | Jabalpur Car Rental Taxi Service','Get to know a travel service rooted in Jabalpur, focused on clear communication and comfortable local and outstation journeys.'),component:AboutPage});
function AboutPage(){return <><PageIntro eyebrow="Rooted in Jabalpur" title="Your journey matters." description="A local connection for taxi and chauffeur-driven travel in Jabalpur and across Madhya Pradesh."/><section className="section-space"><div className="site-container about-story"><img src={optimizedImage(road, 768, 75)} alt="Tree-lined countryside road in central India — illustrative photograph" width={633} height={506} loading="lazy" decoding="async"/><div><p className="eyebrow">Thoughtful travel</p><h2>A comfortable ride.<br/>A personal conversation.</h2><p>Jabalpur Car Rental Taxi Service brings your travel plans into one simple conversation — whether you need a city ride, airport transfer, an outstation journey or a day of sightseeing.</p><p>Choose a vehicle that suits your group, discuss your itinerary and confirm your fare and availability before finalizing a booking. Every enquiry starts with your needs.</p></div></div></section><WhyChooseUs/><Contact/></>;}
