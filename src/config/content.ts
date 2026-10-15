import { CarFront, Plane, TrainFront, Route, ArrowRight, ArrowLeftRight, UserRoundCheck, MapPinned } from 'lucide-react';
import dzire from '@/assets/dzire.jpg';
import ertiga from '@/assets/ertiga.jpg';
import innova from '@/assets/innova.jpg';
import crysta from '@/assets/crysta.jpg';
import bhedaghat from '@/assets/bhedaghat.jpg';
import dhuandhar from '@/assets/dhuandhar.jpg';
import bandhavgarh from '@/assets/bandhavgarh.jpg';
import kanha from '@/assets/kanha.jpg';
import jabalpur from '@/assets/jabalpur.jpg';
import urbania from '@/assets/urbania.jpg';
import tempo from '@/assets/tempo.jpg';
import minibus from '@/assets/minibus.jpg';
import acbus from '@/assets/acbus.jpg';
import bigbus from '@/assets/bigbus.jpg';
export const services = [
 { title:'Local Taxi Service', description:'Everyday city rides, meetings and errands, at your own pace.', icon:CarFront },
 { title:'Airport Taxi', description:'A comfortable connection to and from Jabalpur Airport.', icon:Plane },
 { title:'Railway Station Pickup', description:'Start or finish your rail journey with a convenient pickup.', icon:TrainFront },
 { title:'Outstation Taxi', description:'Discover Madhya Pradesh with a ride planned around you.', icon:Route },
 { title:'One-Way Taxi', description:'Travel to your next destination without a return journey.', icon:ArrowRight },
 { title:'Round-Trip Taxi', description:'A convenient ride out and back for your travel plans.', icon:ArrowLeftRight },
 { title:'Chauffeur-Driven Rental', description:'Leave the driving to your chauffeur. Enjoy the journey.', icon:UserRoundCheck },
 { title:'Jabalpur Sightseeing', description:'Explore local landmarks and hidden gems in comfort.', icon:MapPinned },
];
export const vehicles = [
 {name:'Maruti Suzuki Dzire',image:dzire,capacity:'Up to 4 passengers',tag:'Sedan',journeys:'City rides · Airport transfers · One-way trips'},
 {name:'Maruti Suzuki Ertiga',image:ertiga,capacity:'Up to 6 passengers',tag:'Family MPV',journeys:'Family travel · Sightseeing · Outstation'},
 {name:'Toyota Innova',image:innova,capacity:'Up to 6–7 passengers',tag:'Spacious MPV',journeys:'Group journeys · Tours · Long-distance travel'},
 {name:'Toyota Innova Crysta',image:crysta,capacity:'Up to 6–7 passengers',tag:'Premium MPV',journeys:'Business travel · Family trips · Outstation'},
 {name:'Force Urbania',image:urbania,capacity:'Up to 17 passengers',tag:'Luxury Van',journeys:'Group tours · Weddings · Outstation'},
 {name:'Tempo Traveller',image:tempo,capacity:'Up to 17 passengers',tag:'Group Van',journeys:'Group travel · Pilgrimages · Sightseeing'},
 {name:'Mini Bus',image:minibus,capacity:'20–26 passengers',tag:'Mini Tourist Bus',journeys:'Large groups · Events · Tours'},
 {name:'AC Tourist Bus',image:acbus,capacity:'32–40 passengers',tag:'Medium Tourist Bus',journeys:'Corporate groups · Tour groups'},
 {name:'Big Bus AC',image:bigbus,capacity:'Up to 52 passengers',tag:'Full Size Tourist Bus',journeys:'Large tours · Weddings · Long-distance'},
];
export const popularRoutes = [
 {name:'Bhedaghat',description:'Marble canyons, river views and a memorable day out.'},
 {name:'Katni',description:'A convenient intercity connection for work or family.'},
 {name:'Mandla',description:'A scenic journey into the heart of Madhya Pradesh.'},
 {name:'Bandhavgarh',description:'Your connection to unforgettable wildlife adventures.'},
 {name:'Damoh',description:'Comfortable travel for visits, meetings and more.'},
 {name:'Kanha',description:'Escape to sal forests, open meadows and wildlife.'},
];
export const tours = [
 {name:'Bhedaghat & Marble Rocks',image:bhedaghat,tag:'Riverside escape',destination:'Bhedaghat and Marble Rocks'},
 {name:'Dhuandhar Falls',image:dhuandhar,tag:'Nature at its finest',destination:'Dhuandhar Falls'},
 {name:'Bandhavgarh',image:bandhavgarh,tag:'Into the wild',destination:'Bandhavgarh National Park'},
 {name:'Kanha National Park',image:kanha,tag:'A wilderness getaway',destination:'Kanha National Park'},
 {name:'Jabalpur City Tour',image:jabalpur,tag:'Discover the city',destination:'Jabalpur City Tour'},
];
