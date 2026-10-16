import { Users } from 'lucide-react';
import type { vehicles } from '@/config/content';
import { optimizedImage, responsiveImageSet } from '@/config/metadata';
import { ContactAction } from './ContactAction';
export function VehicleCard({vehicle}:{vehicle:typeof vehicles[number]}) { return <article className="vehicle-card"><div className="vehicle-photo"><img src={optimizedImage(vehicle.image, 480, 75)} srcSet={responsiveImageSet(vehicle.image, [320, 480, 640], 75)} sizes="(max-width: 900px) 50vw, 25vw" alt={`${vehicle.name} — representative vehicle photograph`} loading="lazy" decoding="async" width={768} height={512}/><span className="vehicle-tag">{vehicle.tag}</span></div><div className="vehicle-info"><h3>{vehicle.name}</h3><div className="vehicle-meta"><Users size={13}/>{vehicle.capacity}</div><p>{vehicle.journeys}</p><div className="card-contact-actions"><ContactAction kind="whatsapp"/><ContactAction kind="phone"/></div></div></article>; }
