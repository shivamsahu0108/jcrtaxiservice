import { Users, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { BookingDialog } from './BookingDialog';
import type { vehicles } from '@/config/content';
export function VehicleCard({vehicle}:{vehicle:typeof vehicles[number]}) { return <article className="vehicle-card"><div className="vehicle-photo"><img src={vehicle.image} alt={`${vehicle.name} — representative vehicle photograph`} loading="lazy" width={768} height={512}/><span className="vehicle-tag">{vehicle.tag}</span></div><div className="vehicle-info"><h3>{vehicle.name}</h3><div className="vehicle-meta"><Users size={13}/>{vehicle.capacity}</div><p>{vehicle.journeys}</p><BookingDialog vehicle={vehicle.name}><Button variant="outline">Get Fare<ArrowUpRight/></Button></BookingDialog></div></article>; }
