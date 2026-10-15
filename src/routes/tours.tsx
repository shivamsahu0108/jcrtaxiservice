import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/config/metadata';
import { PageIntro } from '@/components/PageIntro';
import { TourPackages } from '@/sections/TourPackages';
import { Contact } from '@/sections/Contact';
export const Route = createFileRoute('/tours')({head:()=>pageHead('Sightseeing & Tour Planning | Jabalpur Car Rental','Plan trips to Bhedaghat, Dhuandhar Falls, Bandhavgarh, Kanha National Park and Jabalpur city landmarks.'),component:ToursPage});
function ToursPage(){return <><PageIntro eyebrow="Make room for discovery" title="Places worth the journey." description="Build your own sightseeing itinerary, from the Marble Rocks to the forests of Kanha. Transport quotes, park entry and safari arrangements are discussed separately."/><TourPackages/><Contact/></>;}
