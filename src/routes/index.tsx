import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { Hero } from '@/sections/Hero';
import { TrustHighlights } from '@/sections/TrustHighlights';
import { Services } from '@/sections/Services';
import { Fleet } from '@/sections/Fleet';
import { PopularRoutes } from '@/sections/PopularRoutes';
import { TourPackages } from '@/sections/TourPackages';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { BookingSteps } from '@/sections/BookingSteps';
import { FAQ } from '@/sections/FAQ';
import { Contact } from '@/sections/Contact';
export const Route = createFileRoute('/')({head:()=>pageHead('Premium Car Rental & Taxi Service in Jabalpur','Explore local taxis, airport transfers, outstation journeys and chauffeur-driven car rentals in Jabalpur, Madhya Pradesh. Enquire directly about your ride.'),component:Home});
function Home() { return <><Hero/><TrustHighlights/><Services/><Fleet/><PopularRoutes/><TourPackages/><WhyChooseUs/><BookingSteps/><FAQ/><Contact/></>; }
