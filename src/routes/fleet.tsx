import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { Fleet } from '@/sections/Fleet';
import { Contact } from '@/sections/Contact';
export const Route = createFileRoute('/fleet')({head:()=>pageHead('Our Vehicle Options | Jabalpur Car Rental','Explore Dzire, Ertiga, Innova and Innova Crysta vehicle options. Enquire about seating, fares and availability for your trip.'),component:FleetPage});
function FleetPage(){return <><PageIntro eyebrow="Space to travel well" title="Comfort for the road ahead." description="Compare sedans and MPVs for solo travel, family outings or group journeys. Confirm the exact vehicle and seating with your enquiry."/><Fleet fullPage/><Contact/></>;}
