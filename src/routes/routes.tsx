import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { PopularRoutes } from '@/sections/PopularRoutes';
import { BookingSteps } from '@/sections/BookingSteps';
import { Contact } from '@/sections/Contact';
export const Route = createFileRoute('/routes')({head:()=>pageHead('Popular Outstation Routes | Jabalpur Car Rental','Enquire about taxis from Jabalpur to Bhedaghat, Katni, Mandla, Bandhavgarh, Damoh and Kanha.'),component:RoutesPage});
function RoutesPage(){return <><PageIntro eyebrow="Your next destination" title="Take the scenic route." description="Enquire about one-way and return trips from Jabalpur to destinations across Madhya Pradesh."/><PopularRoutes/><BookingSteps/><Contact/></>;}
