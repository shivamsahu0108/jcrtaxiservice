import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { Services } from '@/sections/Services';
import { BookingSteps } from '@/sections/BookingSteps';
import { FAQ } from '@/sections/FAQ';
export const Route = createFileRoute('/services')({head:()=>pageHead('Taxi Services | Jabalpur Car Rental','Local taxis, airport and railway transfers, outstation rides and chauffeur-driven car rentals in Jabalpur.'),component:ServicesPage});
function ServicesPage(){return <><PageIntro eyebrow="At your service" title="A ride for every reason." description="City errands, airport connections and longer adventures — plan your travel around what matters to you."/><Services fullPage/><BookingSteps/><FAQ/></>;}
